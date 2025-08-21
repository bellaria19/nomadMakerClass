import type { Route } from "./+types/product-overview-layout";
import { ChevronUpIcon, StarIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function ProductOverviewLayout({
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
        <NavLink
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive ? "bg-accent text-red-400" : ""
            )
          }
          to={`/products/${productId}/overview`}
        >
          Overview
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive ? "bg-accent text-red-400" : ""
            )
          }
          to={`/products/${productId}/reviews`}
        >
          Reviews
        </NavLink>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
