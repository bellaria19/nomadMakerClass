import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Post ${params.postId} | wemake` },
  {
    name: "description",
    content: `View community post ${params.postId} on wemake`,
  },
];

export default function PostPage({ params }: Route.ComponentProps) {
  return (
    <div>
      <h1>Post {params.postId}</h1>
    </div>
  );
}
