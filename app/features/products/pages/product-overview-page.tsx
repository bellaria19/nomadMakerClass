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
    <div>
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
      {/* <Card>
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
      </Card> */}
    </div>
  );
}
