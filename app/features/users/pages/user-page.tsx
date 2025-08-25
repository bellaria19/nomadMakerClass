import type { Route } from "./+types/user-page";

export const meta: Route.MetaFunction = () => [
  { title: "User | wemake" },
  {
    name: "description",
    content: "Manage your account settings on wemake",
  },
];

export default function UserPage() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
