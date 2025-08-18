import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { CardTitle } from "~/components/ui/card";
import { Dot } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  postedAt: string;
  avatarUrl?: string;
}

export function PostCard({
  id,
  title,
  author,
  category,
  postedAt,
  avatarUrl,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author}</AvatarFallback>
            {avatarUrl && <AvatarImage src={avatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{author}</span>
              <span>{category}</span>
              <span>•</span>
              <Dot className="w-4 h-4" />
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Reply &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
