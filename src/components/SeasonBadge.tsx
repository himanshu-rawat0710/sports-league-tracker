"use client";

import Image from "next/image";
import { useLeagueBadge } from "@/hooks/useLeagueBadge";
import { Loader2, ImageOff } from "lucide-react";

export function SeasonBadge({ leagueId, isOpen }: { leagueId: string; isOpen: boolean }) {
  // Only fetches if isOpen is true
  const { data: badgeUrl, isLoading, isError } = useLeagueBadge(leagueId, isOpen);

  if (!isOpen) return null;

  return (
    <div className="mt-4 flex justify-center items-center h-32 bg-slate-50 dark:bg-slate-800 rounded-md border border-dashed border-slate-200 dark:border-slate-700">
      {isLoading ? (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-xs">Loading Badge...</span>
        </div>
      ) : isError || !badgeUrl ? (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageOff className="h-6 w-6" />
          <span className="text-xs">No Badge Found</span>
        </div>
      ) : (
        <div className="relative h-28 w-28">
          <Image
            src={badgeUrl}
            alt="Season Badge"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
}