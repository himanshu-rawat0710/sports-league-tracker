import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getLeagues } from "@/services/api";
import LeagueList from "@/components/LeagueList";

// Server Component (Async)
export default async function Home() {
  // 1. Initialize QueryClient on the Server
  const queryClient = new QueryClient();

  // 2. Prefetch the data (SSR)
  // This runs on the server, fetches data, and stores it in the cache
  await queryClient.prefetchQuery({
    queryKey: ["leagues"],
    queryFn: getLeagues,
  });

  return (
    // 3. Hydrate the Client
    // "dehydrate" takes the server cache and passes it to the client
    // "HydrationBoundary" provides this cache to all child components
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen bg-background">
        <LeagueList />
      </main>
    </HydrationBoundary>
  );
}