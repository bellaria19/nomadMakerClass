import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { CardTitle } from "~/components/ui/card";
import { ChevronUpIcon, Dot } from "lucide-react";
import { cn } from "~/lib/utils";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  postedAt: string;
  avatarUrl?: string;
  expanded?: boolean;
  votesCount?: number;
}

export function PostCard({
  id,
  title,
  author,
  category,
  postedAt,
  avatarUrl,
  expanded = false,
  votesCount = 0,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className="block">
      <Card
        className={cn(
          "bg-transparent hover:bg-card/50 transition-colors",
          expanded ? "flex flex-row items-center justify-between" : ""
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author}</AvatarFallback>
            {avatarUrl && <AvatarImage src={avatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-lg md:text-xl font-semibold leading-tight tracking-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span className="whitespace-nowrap">
                {author} on {category}
              </span>
              <Dot className="w-4 h-4" />
              <span className="whitespace-nowrap">{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        {!expanded && (
          <CardFooter className="flex justify-end pb-0">
            <Button variant="link">Reply &rarr;</Button>
          </CardFooter>
        )}
        {expanded && (
          <CardFooter className="flex justify-end">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{votesCount}</span>
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
