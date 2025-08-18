import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import InputPair from "~/components/input-pair";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import SelectPair from "~/components/select-pair";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Product | wemake" },
  { name: "description", content: "Submit your product to wemake" },
];

export default function SubmitPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Submit your Product"
        description="Share your product with the world"
      />

      <Form>
        <div className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
          <div className="space-y-5">
            <InputPair
              label="Name"
              description="This is the name of your product"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name of your product"
            />

            <InputPair
              label="Tagline"
              description="60 characters or less"
              id="tagline"
              name="tagline"
              required
              type="text"
              placeholder="A concise description of your product"
            />

            <InputPair
              label="URL"
              description="The URL of your product"
              id="url"
              name="url"
              required
              type="url"
              placeholder="https://example.com"
            />

            <InputPair
              textarea
              label="Description"
              description="A detailed description of your product"
              id="description"
              name="description"
              required
              type="text"
              placeholder="A detailed description of your product"
            />

            <SelectPair
              label="Category"
              description="The category of your product"
              name="category"
              required
              placeholder="Select a category"
              options={[
                { label: "AI", value: "ai" },
                { label: "Design", value: "design" },
                { label: "Marketing", value: "marketing" },
                { label: "Development", value: "development" },
              ]}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
