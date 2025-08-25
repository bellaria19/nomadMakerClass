import type { Route } from "./+types/dashboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Dashboard | wemake" },
  {
    name: "description",
    content: "Your personal dashboard on wemake",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}