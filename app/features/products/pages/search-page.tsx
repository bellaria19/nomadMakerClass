import { useState } from "react";
import type { Route } from "./+types/search-page";
import z from "zod";
import { Hero } from "~/components/hero-section";
import { ProductCard } from "~/features/products/components/product-card";
import ProductPagination from "~/components/product-pagination";
import { Form } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export const meta: Route.MetaFunction = () => [
  { title: "Search Products | wemake" },
  { name: "description", content: "Search products on wemake" },
];

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

// params is data from url
export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid params");
  }
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  // const [query, setQuery] = useState(loaderData.q as string);
  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        description="Search for products by title of description"
      />

      <Form className="flex justify-center max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>

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
