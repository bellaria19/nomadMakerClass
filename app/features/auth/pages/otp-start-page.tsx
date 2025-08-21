import { Button } from "~/components/ui/button";
import type { Route } from "./+types/otp-start-page";
import { Form, Link } from "react-router";
import InputPair from "~/components/input-pair";

export const meta: Route.MetaFunction = () => [
  { title: "OTP Start | wemake" },
  {
    name: "description",
    content: "Start OTP verification",
  },
];

export default function OtpStartPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute right-4 top-8">
        <Link to={"/auth/login"}>Login &rarr;</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Log in with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to log in to your account.
          </p>
        </div>
        <Form className="w-full space-y-5">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            type="email"
            required
            placeholder="i.e wemake@example.com"
          />

          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
