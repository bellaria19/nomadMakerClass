import { Link } from "react-router";
import type { Route } from "./+types/product-reviews-page";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Product ${params.productId} Reviews | wemake` },
  { name: "description", content: `Reviews for product ${params.productId} on wemake` },
];

export default function ProductReviewsPage({ params }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-6 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Product Reviews</h1>
          <p className="text-muted-foreground">
            Reviews for product {params.productId}
          </p>
        </div>
        <Button asChild>
          <Link to={`/products/${params.productId}/reviews/new`}>Write a Review</Link>
        </Button>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>
              See what others are saying about this product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>No reviews yet. Be the first to write one!</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild>
          <Link to={`/products/${params.productId}/overview`}>Back to Overview</Link>
        </Button>
      </div>
    </div>
  );
}