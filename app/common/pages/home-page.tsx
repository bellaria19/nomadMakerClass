import { Link, type MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "~/components/ui/button";
import type { Route } from ".react-router/types/app/+types/root";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

// server side lendering
export const loader = () => {
  return {
    hello: "world",
  };
};

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best product made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name={`Product ${index}`}
            description={`Product Description ${index}`}
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id={`post-${index}`}
            title={`Discussion Title ${index}`}
            author={`Author ${index}`}
            category="Productivity"
            postedAt="12 hours ago"
            avatarUrl="https://github.com/apple.png"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 5 }).map((_, index) => (
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
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            key={`job-${index}`}
            id={`job-${index}`}
            company="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-Time"
            positionLocation="Remote"
            salary="$100,000 - $120,000"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 4 }).map((_, index) => (
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
