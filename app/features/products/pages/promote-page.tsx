import type { Route } from "./+types/promote-page";

export const meta: Route.MetaFunction = () => [
  { title: "Promote Product | wemake" },
  { name: "description", content: "Promote your product on wemake" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function PromotePage() {
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Promote</h1>
      <p className="text-muted-foreground">Coming soon.</p>
    </div>
  );
}
