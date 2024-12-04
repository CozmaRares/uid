import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compactNumberFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1,
});

const relativeFormatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
});

export function formatRelativeDate(targetDate: Date) {
  const diffInMs = targetDate.getTime() - Date.now();
  const diffInSeconds = Math.round(diffInMs / 1000);

  if (Math.abs(diffInSeconds) < 60) {
    return relativeFormatter.format(diffInSeconds, "seconds");
  }
  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (Math.abs(diffInMinutes) < 60) {
    return relativeFormatter.format(diffInMinutes, "minutes");
  }
  const diffInHours = Math.round(diffInMinutes / 60);
  if (Math.abs(diffInHours) < 24) {
    return relativeFormatter.format(diffInHours, "hours");
  }
  const diffInDays = Math.round(diffInHours / 24);
  return relativeFormatter.format(diffInDays, "days");
}
