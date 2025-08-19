import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/promote-page";
import { Form } from "react-router";
import SelectPair from "~/components/select-pair";
import { Calendar } from "~/components/ui/calendar";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";

export const meta: Route.MetaFunction = () => [
  { title: "Promote Product | wemake" },
  { name: "description", content: "Promote your product on wemake" },
];

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();

  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;

  return (
    <div className="space-y-10">
      <Hero
        title="Submit your Product"
        description="Share your product with the world"
      />

      <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Select a product"
          description="Select the product you want to promote"
          name="product"
          placeholder="Select a product"
          options={[
            {
              label: "AI Dark Mode Maker-0",
              value: "ai-dark-mode-maker-0",
            },
            {
              label: "AI Dark Mode Maker-1",
              value: "ai-dark-mode-maker-1",
            },
            {
              label: "AI Dark Mode Maker-2",
              value: "ai-dark-mode-maker-2",
            },
            {
              value: "ai-dark-mode-maker-3",
              label: "AI Dark Mode Maker-3",
            },
          ]}
        />

        <div className="flex flex-col gap-5 items-center w-full">
          <Label className="flex flex-col">
            Select a range of dates for promotion
            <small className="text-muted-foreground text-center">
              Minimum duration is a 3days.
            </small>
          </Label>

          <Calendar
            mode="range"
            startMonth={new Date()}
            numberOfMonths={2}
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
            className="rounded-xl shadow-xl shadow-rose-300/50"
          />

          <Button disabled={totalDays === 0}>
            Go to checkout (${totalDays * 20})
          </Button>
        </div>
      </Form>
    </div>
  );
}
