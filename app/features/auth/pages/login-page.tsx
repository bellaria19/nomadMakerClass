import type { Route } from "./+types/login-page";
import { Form, Link } from "react-router";
import InputPair from "~/components/input-pair";
import { Button } from "~/components/ui/button";
import AuthButtons from "~/features/auth/components/auth-buttons";

export const meta: Route.MetaFunction = () => [
  { title: "Login | wemake" },
  {
    name: "description",
    content: "Login to your wemake account",
  },
];

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute right-4 top-8">
        <Link to={"/auth/join"}>Join &rarr;</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
        <Form className="w-full space-y-5">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />

          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="password"
          />

          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>

        <AuthButtons />
      </div>
    </div>
  );
}
