import { useState } from "react";
import type { Route } from "./+types/search-page";

export const meta: Route.MetaFunction = () => [
  { title: "Search Products | wemake" },
  { name: "description", content: "Search products on wemake" },
];

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  return { q };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  const [query, setQuery] = useState(loaderData.q as string);
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Search</h1>
      <form method="get" className="space-y-3">
        <input
          className="w-full border rounded-md px-3 py-2"
          name="q"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
