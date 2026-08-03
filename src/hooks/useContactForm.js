import { useState, useRef, useCallback, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const MAX_FILE_MB = 10;
const RESEND_COOLDOWN_MS = 15_000; // basic anti-spam: block rapid re-submits

function validateFile(file) {
  if (!file) return "";
  if (file.type !== "application/pdf") return "Only PDF files are accepted.";
  if (file.size > MAX_FILE_MB * 1024 * 1024) return `File must be under ${MAX_FILE_MB}MB.`;
  return "";
}

export function useContactForm({ onSuccess } = {}) {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sending | success | error
  const [sendError, setSendError] = useState("");

  const mountedRef = useRef(true);
  const lastSentAtRef = useRef(0);

  useEffect(() => {
  mountedRef.current = true; // reset on every (re)mount — StrictMode mounts twice in dev
  return () => {
    mountedRef.current = false;
  };
}, []);

  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fails loudly in dev, avoids a confusing runtime error deep inside emailjs.send later.
      console.error(
        "[useContactForm] Missing EmailJS environment variables. " +
          "Check REACT_APP_EMAILJS_SERVICE_ID / _TEMPLATE_ID / _PUBLIC_KEY."
      );
    }
  }, []);

  const handleFile = useCallback((selected) => {
    const err = validateFile(selected);
    setFileError(err);
    setFile(err ? null : selected || null);
  }, []);

  const removeFile = useCallback(() => {
    setFile(null);
    setFileError("");
  }, []);

  const send = useCallback(
    async (formData) => {
      const now = Date.now();
      if (now - lastSentAtRef.current < RESEND_COOLDOWN_MS) {
        setSendStatus("error");
        setSendError("Please wait a few seconds before sending another message.");
        return { ok: false };
      }
      
      if (formData.website) {
        setSendStatus("success");
        return { ok: true };
      }

      setSendStatus("sending");
      setSendError("");

      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          },
          { publicKey: PUBLIC_KEY }
        );

        lastSentAtRef.current = Date.now();
        if (!mountedRef.current) return { ok: true };

        setSendStatus("success");
        removeFile();
        onSuccess?.();
        return { ok: true };
      } catch (err) {
        if (!mountedRef.current) return { ok: false };
        setSendStatus("error");
        setSendError(
          err?.text || err?.message || "Something went wrong. Please try again in a moment."
        );
        return { ok: false, error: err };
      }
    },
    [onSuccess, removeFile]
  );

  const resetStatus = useCallback(() => {
    setSendStatus("idle");
    setSendError("");
  }, []);

  return {
    file,
    fileError,
    handleFile,
    removeFile,
    sendStatus,
    sendError,
    isSending: sendStatus === "sending",
    send,
    resetStatus,
  };
}
