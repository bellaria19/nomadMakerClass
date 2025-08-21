import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/components/input-pair";
import { Button } from "~/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";

export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          What do you think of this product?
        </DialogTitle>
        <DialogDescription>
          this action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>

      <Form className="space-y-10">
        <Label className="flex flex-col gap-1 items-start">
          Rating{" "}
          <small className="text-muted-foreground">
            What would you rate this product?
          </small>
        </Label>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <label
              key={star}
              className="relative"
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
            >
              <StarIcon
                className="size-5 text-yellow-400"
                fill={
                  hoveredStar >= star || rating >= star
                    ? "currentColor"
                    : "none"
                }
              />
              <input
                type="radio"
                value="star"
                name="rating"
                required
                className="opacity-0 h-px w-px absolute"
                onChange={() => setRating(star)}
              />
            </label>
          ))}
        </div>

        <InputPair
          textarea
          required
          label="Review"
          description="Maximum 1000 characters"
          placeholder="Tell us more about your experience with this product"
        />

        <Button type="submit">Submit</Button>
      </Form>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
}
