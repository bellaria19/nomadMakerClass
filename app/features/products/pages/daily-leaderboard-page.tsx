import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/components/hero-section";
import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "~/components/ui/button";
import ProductPagination from "~/components/product-pagination";

export const meta: Route.MetaFunction = () => [
  { title: "Daily Leaderboard | wemake" },
  { name: "description", content: "Top products today" },
];

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      400
    );
  }
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

  if (!date.isValid) {
    // throw new Error("Invalid date");
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      400
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "future date",
      },
      400
    );
  }
  return { ...parsedData };
}

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });

  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-10">
      <Hero
        title={`The best of ${urlDate.toLocaleString(DateTime.DATE_MED)}`}
        description={""}
      />

      <div className="flex justify-between items-center w-full max-w-screen-md mx-auto px-4 ">
        <Button variant="outline" asChild>
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            &larr; {previousDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>

        <span className="text-sm text-muted-foreground">
          {urlDate.toLocaleString(DateTime.DATE_MED)}
        </span>

        <Button
          variant="outline"
          asChild
          disabled={isToday}
          className={isToday ? "opacity-50" : ""}
        >
          <Link
            to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
          >
            {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
          </Link>
        </Button>
      </div>

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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Error in leaderboard</div>;
}
