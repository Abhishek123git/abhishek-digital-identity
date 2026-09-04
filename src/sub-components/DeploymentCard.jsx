import { cloneElement, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

const VISIBILITY_STYLES = {
  public: {
    color: "#15803d",
    backgroundColor: "#f0fdf4",
    border: "1px solid #bbf7d0",
    iconColor: "#16a34a",
  },
  private: {
    color: "#4b5563",
    backgroundColor: "#f3f4f6",
    border: "1px solid #e5e7eb",
    iconColor: "#6b7280",
  },
};

export default function DeploymentCard({
  thumbnailAlt = "Site preview",
  repoName,
  visibility = "public",
  siteUrl,
  deploySource,
  publishedOn,
  onClick,
  chipData = [],
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const isPublic = visibility === "public";
  const visStyle = isPublic ? VISIBILITY_STYLES.public : VISIBILITY_STYLES.private;
  const cleanUrl = siteUrl?.replace(/^https?:\/\//, "");

  return (
    <div
      onClick={onClick}
      className={`flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 rounded-xl border border-gray-200 bg-white/90 p-4 shadow-sm transition-shadow hover:shadow-md ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-56 h-40 sm:h-auto shrink-0 overflow-hidden rounded-lg bg-gray-900">
        {!imgFailed && siteUrl ? (
          <img
            src={`https://api.screenshotmachine.com?key=6c1ee1&url=${encodeURIComponent(
              `https://${cleanUrl}`
            )}&dimension=1024x768&device=desktop&format=jpg&cacheLimit=0`}
            alt={thumbnailAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            No preview available
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center py-1 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{repoName}</h3>
          <Chip
            icon={
              isPublic ? (
                <PublicRoundedIcon aria-hidden="true" focusable="false" sx={{ fontSize: 14 }} />
              ) : (
                <LockRoundedIcon aria-hidden="true" focusable="false" sx={{ fontSize: 13 }} />
              )
            }
            label={isPublic ? "Public" : "Private"}
            size="small"
            sx={{
              height: 22,
              fontSize: "0.72rem",
              fontWeight: 600,
              color: visStyle.color,
              backgroundColor: visStyle.backgroundColor,
              border: visStyle.border,
              "& .MuiChip-icon": {
                color: visStyle.iconColor,
                marginLeft: "6px",
              },
            }}
          />
        </div>

        {siteUrl && (
          <a
            href={`https://${cleanUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mb-3 flex items-center gap-2 text-[15px] font-medium text-green-600 w-fit break-all"
          >
            <span className="h-2 w-2 rounded-full bg-green-700 shrink-0 animate-pulse" aria-hidden="true" />
            {siteUrl}
          </a>
        )}

        <p className="text-sm text-gray-500">
          Deploys on <span className="font-semibold text-gray-700">{deploySource}</span>.
        </p>

        {publishedOn && (
          <p className="text-sm text-gray-500">
            Published on <span className="font-medium text-gray-700">{publishedOn}</span>.
          </p>
        )}
      </div>

      {/* Technologies */}
      {chipData.length > 0 && (
        <div className="sm:max-w-[45%] shrink-0">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Technologies:</span>
          </p>
          <Stack direction="row" spacing={1} className="mt-3 flex flex-wrap border-s-2 border-black p-2 rounded"
          >
            {chipData.map((chip, idx) => (
              <Chip
                key={idx}
                icon={
                  chip.icon
                    ? cloneElement(chip.icon, { "aria-hidden": "true", focusable: "false" })
                    : undefined
                }
                label={chip.label}
                variant={chip.variant}
                size="medium"
                className="!px-1 !py-2 !m-1"
              />
            ))}
          </Stack>
        </div>
      )}
    </div>
  );
}