import { Link } from "react-router";
import type { Route } from "./+types/product-new-reviews-page";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Write Review for Product ${params.productId} | wemake` },
  { name: "description", content: `Write a review for product ${params.productId} on wemake` },
];

export default function ProductNewReviewsPage({ params }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Write a Review</h1>
        <p className="text-muted-foreground">
          Share your experience with product {params.productId}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Review</CardTitle>
          <CardDescription>
            Help others by sharing your honest feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <Input 
                id="rating" 
                type="number" 
                min="1" 
                max="5" 
                placeholder="Rate from 1 to 5"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="title">Review Title</Label>
              <Input 
                id="title" 
                placeholder="Summarize your review in a few words"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="review">Your Review</Label>
              <Textarea 
                id="review"
                placeholder="Write your detailed review here..."
                rows={6}
              />
            </div>
            
            <div className="flex gap-3">
              <Button type="submit">Submit Review</Button>
              <Button variant="outline" asChild>
                <Link to={`/products/${params.productId}/reviews`}>Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}