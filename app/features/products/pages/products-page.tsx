import { Link, redirect } from "react-router";
import type { Route } from "./+types/products-page";
import { Button } from "~/components/ui/button";

export const meta: Route.MetaFunction = () => [
  { title: "Products | wemake" },
  { name: "description", content: "Explore products on wemake" },
];

// this function run in backend
// use for redirect
// export function loader() {
//   return redirect("/products/leaderboards");
// }

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">
          Discover what our community is building.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="secondary" asChild>
          <Link to="/products/leaderboards">Leaderboards</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/products/categories">Categories</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link to="/products/search">Search</Link>
        </Button>
        <Button asChild>
          <Link to="/products/submit">Submit a product</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products/promote">Promote</Link>
        </Button>
      </div>
    </div>
  );
}
