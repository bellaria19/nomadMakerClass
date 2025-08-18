import type { Route } from "./+types/submit-page";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Product | wemake" },
  { name: "description", content: "Submit your product to wemake" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Submit a Product</h1>
      <p className="text-muted-foreground">Coming soon.</p>
    </div>
  );
}
