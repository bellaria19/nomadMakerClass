import type { Route } from "./+types/monthly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Monthly Leaderboard | wemake" },
  { name: "description", content: "Top products this month" },
];

export function loader({ params }: Route.LoaderArgs) {
  const { year, month } = params;
  return { year, month };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year, month } = loaderData as { year?: string; month?: string };
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Monthly Leaderboard</h1>
      <p className="text-muted-foreground">
        {year}-{month}
      </p>
    </div>
  );
}
