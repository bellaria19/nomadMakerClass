import { Button } from "~/components/ui/button";
import type { Route } from "./+types/otp-complete-page";
import { Form, Link } from "react-router";
import InputPair from "~/components/input-pair";

export const meta: Route.MetaFunction = () => [
  { title: "OTP Complete | wemake" },
  {
    name: "description",
    content: "Complete OTP verification",
  },
];

export default function OtpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute right-4 top-8">
        <Link to={"/auth/login"}>Login &rarr;</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            Enter the OTP code sent to your email address.
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

          <InputPair
            id="otp"
            label="OTP"
            description="Enter the OTP code sent to your email address"
            name="otp"
            type="number"
            required
            placeholder="i.e 1234"
          />

          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
