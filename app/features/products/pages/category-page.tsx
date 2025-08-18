import type { Route } from "./+types/category-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `${params.category ?? "Category"} | wemake` },
  {
    name: "description",
    content: `Products in ${params.category ?? "Category"}`,
  },
];

export function loader({ params }: Route.LoaderArgs) {
  const { category } = params;
  return { category };
}

export async function action({ request }: Route.ActionArgs) {
  return { ok: true };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData as { category?: string };
  return (
    <div className="container mx-auto px-6 space-y-4">
      <h1 className="text-3xl font-bold">Category</h1>
      <p className="text-muted-foreground">{category}</p>
    </div>
  );
}
