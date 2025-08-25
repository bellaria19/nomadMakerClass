import type { Route } from "./+types/dashboard-product-page";

export const meta: Route.MetaFunction = () => [
  { title: "Dashboard | wemake" },
  {
    name: "description",
    content: "Your personal dashboard on wemake",
  },
];

export default function DashboardProductPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
