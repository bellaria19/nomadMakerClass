import type { Route } from "./+types/categories-page";
import { Hero } from "~/components/hero-section";
import { CategoryCard } from "~/features/products/components/category-card";

export const meta: Route.MetaFunction = () => [
  { title: "Product Categories | wemake" },
  { name: "description", content: "Browse product categories" },
];

export function loader({ request }: Route.LoaderArgs) {
  const categories = [
    { id: "productivity", name: "Productivity", description: "Tools to boost your productivity" },
    { id: "ai", name: "AI", description: "Artificial intelligence powered solutions" },
    { id: "developer-tools", name: "Developer Tools", description: "Essential tools for developers" },
    { id: "design", name: "Design", description: "Creative design and UI/UX tools" },
    { id: "marketing", name: "Marketing", description: "Marketing and growth tools" },
    { id: "education", name: "Education", description: "Learning and educational resources" },
  ];
  return { categories };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Categories" description="Browse products by category" />

      <div className="grid grid-cols-4 gap-10">
        {loaderData.categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
