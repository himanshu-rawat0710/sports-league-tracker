"use client";

import { useState, useMemo } from "react";
import { useLeagues } from "@/hooks/useLeagues";
import { LeagueCard } from "@/components/LeagueCard";
import { FilterBar } from "@/components/FilterBar";
import { Loader2, AlertCircle } from "lucide-react";

export default function LeagueList() {
  const { data: leagues, isLoading, isError } = useLeagues();
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");

  // Fix 1: Robust Sport Extraction
  const availableSports = useMemo(() => {
    if (!leagues) return [];
    
    // Get unique sports, filter out nulls/empties
    const sports = new Set(
      leagues
        .map((l) => l.strSport)
        .filter((s) => s && s.trim().length > 0) // Remove empty/null sports
    );
    
    return Array.from(sports).sort();
  }, [leagues]);

  const filteredLeagues = useMemo(() => {
    if (!leagues) return [];
    
    return leagues.filter((league) => {
      const s = search.toLowerCase();
      // Safety check: ensure fields exist before lowercasing
      const matchesSearch = 
        (league.strLeague?.toLowerCase() || "").includes(s) || 
        (league.strLeagueAlternate?.toLowerCase() || "").includes(s);
      const matchesSport = sport === "" || league.strSport === sport;
      
      return matchesSearch && matchesSport;
    });
  }, [leagues, search, sport]);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-red-500">
        <AlertCircle className="h-10 w-10 mb-2" />
        <p>Failed to load leagues.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sports Leagues</h1>
        <p className="text-muted-foreground">Browse and discover leagues from around the world.</p>
      </header>

      <FilterBar 
        search={search}
        setSearch={setSearch}
        sport={sport}
        setSport={setSport}
        availableSports={availableSports}
      />

      {/* Fix 2: Added 'items-start' 
         This prevents cards from stretching when a neighbor expands 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredLeagues.map((league) => (
          <LeagueCard key={league.idLeague} league={league} />
        ))}
      </div>

      {filteredLeagues.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No leagues found.</p>
        </div>
      )}
    </div>
  );
}