import type { Route } from "./+types/social-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `${params.provider} Complete | wemake` },
  {
    name: "description",
    content: `Complete ${params.provider} login`,
  },
];

export default function SocialPage({ params }: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Login Complete - {params.provider}</h1>
    </div>
  );
}
