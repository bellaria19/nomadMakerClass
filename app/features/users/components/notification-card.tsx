import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface NotificationCardProps {
  name: string;
  avatar: string;
  fallback: string;
  message: string;
  timestamp: string;
  seen: boolean;
}

export function NotificationCard({
  name,
  avatar,
  fallback,
  message,
  timestamp,
  seen,
}: NotificationCardProps) {
  return (
    <Card className={cn("min-w-[450px]", seen ? "" : "bg-yellow-500/60")}>
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">
            <span>{name}</span>
            <span> {message}</span>
          </CardTitle>
          <small className="text-muted-foreground text-sm">{timestamp}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant={"outline"} size={"icon"}>
          <EyeIcon className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
