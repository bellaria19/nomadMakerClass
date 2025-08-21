import type { Route } from "./+types/ideas-page";
import { Button } from "~/components/ui/button";
import { IdeaCard } from "../components/idea-card";
import { Hero } from "~/components/hero-section";

export const meta: Route.MetaFunction = () => [
  { title: "IdeasGPT | wemake" },
  {
    name: "description",
    content: "Browse and discover innovative ideas on wemake",
  },
];

export default function IdeasPage() {
  // const ideas = [
  //   {
  //     id: "1",
  //     title: "AI-powered code review assistant",
  //     views: 1234,
  //     postedAt: "2 days ago",
  //     likes: 45,
  //     claimed: false,
  //   },
  //   {
  //     id: "2",
  //     title: "Smart home automation dashboard",
  //     views: 890,
  //     postedAt: "5 days ago",
  //     likes: 32,
  //     claimed: true,
  //   },
  //   {
  //     id: "3",
  //     title: "Collaborative music creation platform",
  //     views: 567,
  //     postedAt: "1 week ago",
  //     likes: 28,
  //     claimed: false,
  //   },
  // ];

  return (
    <div className="space-y-20">
      <Hero title="IdeasGPT" description="Find Ideas for your next project" />

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
          <IdeaCard
            id={`idea-${index}`}
            title="A startup that create an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            views={123}
            postedAt="12 hours ago"
            likes={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
