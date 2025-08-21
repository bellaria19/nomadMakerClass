import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `${params.provider} Login | wemake` },
  {
    name: "description",
    content: `Login with ${params.provider}`,
  },
];

export default function SocialStartPage({ params }: Route.ComponentProps) {
  return (
    <div>
      <h1>Social Login Start - {params.provider}</h1>
    </div>
  );
}
