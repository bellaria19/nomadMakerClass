import type { Route } from "./+types/messages-page";

export const meta: Route.MetaFunction = () => [
  { title: "Messages | wemake" },
  {
    name: "description",
    content: "Manage your account settings on wemake",
  },
];

export default function MessagesPage() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
