import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import type { Route } from "./+types/post-page";
import { Form, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { Textarea } from "~/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Post ${params.postId} | wemake` },
  {
    name: "description",
    content: `View community post ${params.postId} on wemake`,
  },
];

export default function PostPage({ params }: Route.ComponentProps) {
  return (
    <div className="grid grid-cols-6 gap-40 items-start">
      <div className="col-span-4 space-y-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/community">Community</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/community/?topic=productivity">Productivity</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/community/${params.postId}`}>
                  What is the best productivity tool?
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex w-full items-start gap-10">
          <Button variant={"outline"} className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>10</span>
          </Button>
          <div className="space-y-20">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                What is the best productivity tool?
              </h2>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span>@nico</span>
                <DotIcon className="size-5" />
                <span>12 hours ago</span>
                <DotIcon className="size-5" />
                <span>10 replies</span>
              </div>
              <p>
                Hello, I'm looking for a productivity tool that can help me
                manage my tasks and projects. Any recommendations? I have tried
                Notion, but it's not what I'm looking for. I dream of a tool
                that can help me manage my tasks and projects. Any
                recommendations?
              </p>
            </div>
            <Form className="flex items-start gap-5">
              <Avatar>
                <AvatarFallback>N</AvatarFallback>
                <AvatarImage src="https://github.com/microsoft.png" />
              </Avatar>
              <div className="flex flex-col gap-5 w-full items-end">
                <Textarea
                  placeholder="Write a reply"
                  className="w-full resize-none"
                  rows={20}
                />
                <Button>Reply</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <aside className="col-span-2"></aside>
    </div>
  );
}
