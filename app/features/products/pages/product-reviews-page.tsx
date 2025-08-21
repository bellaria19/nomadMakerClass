import { Link } from "react-router";
import type { Route } from "./+types/product-reviews-page";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ReviewCard } from "../components/review-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import CreateReviewDialog from "~/features/products/components/create-review-dialog";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Product ${params.productId} Reviews | wemake` },
  {
    name: "description",
    content: `Reviews for product ${params.productId} on wemake`,
  },
];

export default function ProductReviewsPage({ params }: Route.ComponentProps) {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        {/* <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Product Reviews</h1>
          <p className="text-muted-foreground">
            Reviews for product {params.productId}
          </p>
        </div>
        <Button asChild>
          <Link to={`/products/${params.productId}/reviews/new`}>Write a Review</Link>
        </Button>
      </div> */}

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold"> 10 Reviews </h2>

          <DialogTrigger>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>

        <div className="space-y-20">
          {Array.from({ length: 11 }).map((_, index) => (
            <ReviewCard
              username="John Doe"
              handle="@username"
              avatarUrl="https://github.com/facebook.png"
              rating={5}
              content="Lorem ipsum dolor sit amet consectertur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectertur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectertur adipisicing elit. Quisquam, quos."
              postedAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
