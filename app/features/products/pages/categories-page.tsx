import { Link } from "react-router";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = () => [
  { title: "Product Categories | wemake" },
  { name: "description", content: "Browse product categories" },
];

export function loader({ request }: Route.LoaderArgs) {
  const categories = [
    "Productivity",
    "AI",
    "Developer Tools",
    "Design",
    "Marketing",
    "Education",
  ];
  return { categories };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  const { categories } = loaderData as { categories: string[] };
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Categories</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((category) => (
          <li key={category} className="">
            <Link
              className="underline"
              to={`/products/categories/${encodeURIComponent(category)}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
