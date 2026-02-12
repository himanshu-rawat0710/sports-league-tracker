import { useQuery } from "@tanstack/react-query";
import { getLeagueBadge } from "@/services/api";

export const useLeagueBadge = (leagueId: string, isOpen: boolean) => {
  return useQuery<string | null>({
    queryKey: ["league-badge", leagueId], // Cache by specific League ID
    queryFn: () => getLeagueBadge(leagueId),
    enabled: isOpen, // ONLY fetch when the card is expanded (Performance Win)
    staleTime: Infinity, // Once fetched, keep it forever for this session
  });
};