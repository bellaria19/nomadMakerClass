import { Hero } from "~/components/hero-section";
import type { Route } from "./+types/team-page";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Form } from "react-router";
import InputPair from "~/components/input-pair";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Team ${params.teamId} | wemake` },
  {
    name: "description",
    content: `View team details for ${params.teamId} on wemake`,
  },
];

export default function TeamPage({ params }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Join lynn's team" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            {
              title: "Product name",
              value: "Doggie Social",
            },
            {
              title: "Stage",
              value: "MVP",
            },
            {
              title: "Team size",
              value: 3,
            },
            {
              title: "Available equity",
              value: 50,
            },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <p>{item.value}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-bold text-2xl">
                <ul className="text-lg list-disc list-inside">
                  {[
                    "React Developer",
                    "Backend Developer",
                    "Product Manager",
                    "UI/UX Designer",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>
                  Doggie Social is a social media platform for dogs. It allows
                  dogs to connect with each other and share their experiences.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/serranoarevalo.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium">Nicolas</h4>
              <Badge variant="secondary">Entrepreneur</Badge>
            </div>
          </div>
          <Form>
            <InputPair
              label="Introduce yourself"
              description="Tell us about yourself"
              name="introduction"
              type="text"
              id="introduction"
              required
              textarea
              placeholder="i.e. I'm a React Developer with 3 years of experience"
            />
          </Form>

          <Button type="submit" className="w-full">
            Get in touch
          </Button>
        </aside>
      </div>
    </div>
  );
}
