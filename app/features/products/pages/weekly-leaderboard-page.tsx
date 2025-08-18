import type { Route } from "./+types/weekly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Weekly Leaderboard | wemake" },
  { name: "description", content: "Top products this week" },
];

export function loader({ params }: Route.LoaderArgs) {
  const { year, week } = params;
  return { year, week };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  // const { year, week } = loaderData as { year?: string; week?: string };
  return (
    <div className="container mx-auto px-6 space-y-4">
      {/* <h1 className="text-3xl font-bold">Weekly Leaderboard</h1>
      <p className="text-muted-foreground">
        {year}-W{week}
      </p> */}
    </div>
  );
}
