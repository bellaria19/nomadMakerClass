import { redirect } from "react-router";
import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = () => [
  { title: "Profile | wemake" },
  {
    name: "description",
    content: "Your profile on wemake",
  },
];

export function loader() {
  return redirect("/users/nico");
}
