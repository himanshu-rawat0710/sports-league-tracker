import { League, LeagueResponse, SeasonResponse } from "@/types/api";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

export const getLeagues = async (): Promise<League[]> => {
  const res = await fetch(`${BASE_URL}/all_leagues.php`);

  if (!res.ok) {
    throw new Error("Failed to fetch leagues");
  }

  const data: LeagueResponse = await res.json();
  
  // The API might return null if empty, so we default to []
  return data.leagues || [];
};

export const getLeagueBadge = async (leagueId: string): Promise<string | null> => {
  const res = await fetch(`${BASE_URL}/search_all_seasons.php?badge=1&id=${leagueId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch badge");
  }

  const data: SeasonResponse = await res.json();

  // Logic: Return the first badge found, or null if no seasons exist
  // Constraint Check: "can be for any season you like or the first entity"
  return data.seasons?.[0]?.strBadge || null;
};