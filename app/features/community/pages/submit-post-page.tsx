import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/submit-post-page";
import { Form } from "react-router";
import InputPair from "~/components/input-pair";
import SelectPair from "~/components/select-pair";
import { Button } from "~/components/ui/button";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Post | wemake" },
  {
    name: "description",
    content: "Submit a new post to the wemake community",
  },
];

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Discussion"
        description="Ask questions, share ideas, and connect with other developers"
      />

      <Form className="flex flex-col gap-10 max-w-screen-sm mx-auto">
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="(40 characters or less)"
          required
          placeholder="i.e What is the best productivity tool?"
        />

        <SelectPair
          required
          label="Category"
          name="category"
          description="Select the category that best fits your discussion"
          placeholder="i.e Productivity"
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
          ]}
        />

        <InputPair
          label="Content"
          name="content"
          id="content"
          description="(1000 characters or less)"
          required
          placeholder="i.e What is the best productivity tool?"
          textarea
        />

        <Button className="">Create Discussion</Button>
      </Form>
    </div>
  );
}
