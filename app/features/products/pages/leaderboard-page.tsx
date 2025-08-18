import { Link } from "react-router";
import type { Route } from "./+types/leaderboard-page";
import { Hero } from "../../../components/hero-section";
import { Button } from "~/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: Route.MetaFunction = () => [
  { title: "Leaderboards | wemake" },
  { name: "description", content: "Top products across timeframes" },
];

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        description="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular on wemake by day.
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name={`Product${index}`}
            description={`Product Description${index}`}
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}

        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular on wemake by week.
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name={`Product${index}`}
            description={`Product Description${index}`}
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}

        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular on wemake by month.
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name={`Product${index}`}
            description={`Product Description${index}`}
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}

        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular on wemake by year
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name={`Product${index}`}
            description={`Product Description${index}`}
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}

        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}
