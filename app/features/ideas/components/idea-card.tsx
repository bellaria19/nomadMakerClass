import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Dot, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  views: number;
  postedAt: string;
  likes: number;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  title,
  views,
  postedAt,
  likes,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground"
                  : ""
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <span className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <EyeIcon className="w-4 h-4" />
            <span>{views}</span>
          </div>

          <Dot className="w-4 h-4" />
          <span>{postedAt}</span>
        </span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <HeartIcon className="w-4 h-4" />
          <span>{likes}</span>
        </Button>
        {!claimed ? (
          <Button variant="default" asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" className="cursor-not-allowed">
            <LockIcon className="size-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
