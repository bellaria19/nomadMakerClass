import { LockIcon, MessageCircleIcon } from "lucide-react";
import * as React from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { SiGithub, SiKakaotalk } from "@icons-pack/react-simple-icons";
import { Link } from "react-router";

export default function AuthButtons() {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="w-full flex flex-col items-center gap-10">
        <Separator className="w-full" />
        <span className="text-sm text-muted-foreground uppercase font-medium">
          {" "}
          Or continue with
        </span>
        <Separator className="w-full" />
      </div>

      <div className="w-full flex flex-col gap-2">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/kakao/start">
            <SiKakaotalk className="w-4 h-4" />
            Kakao Talk
          </Link>
        </Button>

        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/social/github/start">
            <SiGithub className="w-4 h-4" />
            Kakao Talk
          </Link>
        </Button>

        <Button variant="outline" className="w-full" asChild>
          <Link to="/auth/otp/start">
            <LockIcon className="w-4 h-4" />
            OTP
          </Link>
        </Button>
      </div>
    </div>
  );
}
