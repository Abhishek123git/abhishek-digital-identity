import { useRef, useCallback } from "react";
import { FaDownload } from "../icons";
import { X } from "lucide-react";
import { MAX_FILE_MB } from "../hooks/useContactForm";

/**
 * Optional PDF dropzone. Fully decoupled from the parent form —
 * only talks to it via onFileSelect / file / error props.
 */
export default function FileDropzone({ file, error, onFileSelect, onRemove, disabled }) {
  const inputRef = useRef(null);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      if (disabled) return;
      const dropped = e.dataTransfer.files?.[0];
      if (dropped) onFileSelect(dropped);
    },
    [disabled, onFileSelect]
  );

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="flex items-center justify-center w-full"
      >
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center w-full h-40 border border-gray-600 rounded-lg bg-transparent transition ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-800"
          }`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FaDownload className="w-8 h-auto mb-3 text-[#0abde3] animate-bounce" />
            {!file ? (
              <>
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop{" "}
                  <span className="font-semibold text-[#0abde3]">(Optional)</span>
                </p>
                <p className="text-sm text-gray-400">PDF only (max {MAX_FILE_MB}MB)</p>
              </>
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <span className="truncate max-w-[220px]">{file.name}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onRemove();
                    if (inputRef.current) inputRef.current.value = "";
                  }}
                  className="text-gray-400 hover:text-white"
                  aria-label="Remove attached file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <input
            id="dropzone-file"
            ref={inputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            disabled={disabled}
            aria-describedby={error ? "file-error" : undefined}
            onChange={(e) => onFileSelect(e.target.files?.[0])}
          />
        </label>
      </div>
      {error && (
        <p id="file-error" role="alert" className="text-sm text-[#ff3838] font-semibold mt-2">
          {error}
        </p>
      )}
    </div>
  );
}
