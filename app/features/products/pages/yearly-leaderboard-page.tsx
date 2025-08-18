import type { Route } from "./+types/yearly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Yearly Leaderboard | wemake" },
  { name: "description", content: "Top products this year" },
];

export function loader({ params }: Route.LoaderArgs) {
  const { year } = params;
  return { year };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year } = loaderData as { year?: string };
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Yearly Leaderboard</h1>
      <p className="text-muted-foreground">Year: {year}</p>
    </div>
  );
}
