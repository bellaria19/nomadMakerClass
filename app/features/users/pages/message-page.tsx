import type { Route } from "./+types/message-page";

export const meta: Route.MetaFunction = () => [
  { title: "Message | wemake" },
  {
    name: "description",
    content: "Manage your account settings on wemake",
  },
];

export default function MessagePage() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
