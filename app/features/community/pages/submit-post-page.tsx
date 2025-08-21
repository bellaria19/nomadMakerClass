import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Post | wemake" },
  {
    name: "description",
    content: "Submit a new post to the wemake community",
  },
];

export default function SubmitPostPage() {
  return (
    <div>
      <h1>Submit Post</h1>
    </div>
  );
}