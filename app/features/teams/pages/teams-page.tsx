import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "~/features/teams/components/team-card";

export const meta: Route.MetaFunction = () => [
  { title: "Teams | wemake" },
  {
    name: "description",
    content: "Find and join teams on wemake",
  },
];

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" description="Find a team looking for a new member." />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={`team-${index}`}
            id={`team-${index}`}
            username="lynx"
            userAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
