import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-product-page";

export const meta: Route.MetaFunction = () => [
  { title: "Products | wemake" },
  {
    name: "description",
    content: "User products on wemake",
  },
];

export default function ProfileProductPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCard
          key={`productId-${index}`}
          id={`productId-${index}`}
          name="Product Name"
          description="Product Description"
          commentCount={12}
          viewCount={12}
          upvoteCount={120}
        />
      ))}
    </div>
  );
}
