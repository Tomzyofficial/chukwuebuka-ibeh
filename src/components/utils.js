"use client";

export function DownloadResume(filepath, filename) {
  const link = document.createElement("a");
  link.href = filepath;
  link.download = filename;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
