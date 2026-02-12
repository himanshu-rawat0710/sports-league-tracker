"use client";

import { useState } from "react";
import { League } from "@/types/api";
import { SeasonBadge } from "./SeasonBadge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      // Fix 3: Removed "ring-2 ring-primary" logic.
      // Replaced with specific border color change on 'isOpen'
      className={cn(
        "group cursor-pointer rounded-lg border bg-surface p-4 shadow-sm transition-all hover:shadow-md",
        isOpen ? "border-primary/50 bg-slate-50/50 dark:bg-slate-900/50" : "border-border"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* strLeague */}
          <h3 className={cn(
            "font-semibold text-lg transition-colors",
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          )}>
            {league.strLeague}
          </h3>
          
          {/* strSport */}
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full dark:bg-slate-800 dark:text-slate-300">
            {league.strSport}
          </span>
          
          {/* strLeagueAlternate */}
          {league.strLeagueAlternate && (
            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
              <span className="font-medium">AKA:</span> {league.strLeagueAlternate}
            </p>
          )}
        </div>
        
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </div>

      <SeasonBadge leagueId={league.idLeague} isOpen={isOpen} />
    </div>
  );
}