import { Form } from "react-router";
import { Hero } from "~/components/hero-section";
import ProductPagination from "~/components/product-pagination";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ProductCard } from "~/features/products/components/product-card";
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
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools" // category name
        description="Tools for developers to build products faster" //category description
      />

      {/* <Form className="flex justify-center max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form> */}

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={`productId-${index}`}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={0}
          />
        ))}
      </div>

      <ProductPagination totalPages={10} />
    </div>
  );
}
