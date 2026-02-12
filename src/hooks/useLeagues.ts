import { useQuery } from "@tanstack/react-query";
import { getLeagues } from "@/services/api";
import { League } from "@/types/api";

export const useLeagues = () => {
  return useQuery<League[]>({
    queryKey: ["leagues"], // Unique key for caching
    queryFn: getLeagues,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes (Caching Requirement)
    retry: 2, // Retry twice if API fails
  });
};