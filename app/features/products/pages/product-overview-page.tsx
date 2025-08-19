import { Link } from "react-router";
import type { Route } from "./+types/product-overview-page";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ChevronUpIcon, StarIcon } from "lucide-react";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Product ${params.productId} Overview | wemake` },
  {
    name: "description",
    content: `Overview of product ${params.productId} on wemake`,
  },
];

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="size-40 rounded-xl shadow-xl bg-primary/50"></div>

          <div className="">
            <h1 className="text-4xl font-bold">Product ID: {productId}</h1>
            <p className="text-2xl font-normal text-muted-foreground">
              Product description
            </p>

            <div className="mt-5 flex gap-2 items-center">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon className="size-4" fill="currentColor" />
                ))}
              </div>
              <span className="text-muted-foreground">100 reviews</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" size="lg" className="text-lg h-14 px-10">
            Visit Website
          </Button>
          <Button size="lg" className="text-lg h-14 px-10">
            <ChevronUpIcon className="size-4" />
            Upvote (100)
          </Button>
        </div>
      </div>

      <div className="flex gap-2.5">
        <Button variant="outline">
          <Link to={`/products/${productId}/overview`}>Overview</Link>
        </Button>
        <Button variant="outline">
          <Link to={`/products/${productId}/overview`}>Reviews</Link>
        </Button>
      </div>
      <div className="space-y-10">
        <div className="space-y-1">
          <h3 className="text-lg font-bold">What is this product?</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectertur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold">What is this product?</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectertur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Detailed information about this product
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Product overview content goes here...</p>

          <div className="flex gap-3">
            <Button asChild>
              <Link to={`/products/${productId}/reviews`}>View Reviews</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={`/products/${productId}/reviews/new`}>
                Write Review
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
