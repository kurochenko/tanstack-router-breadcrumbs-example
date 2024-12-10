import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute("/organizations/$orgId/employees")({
  component: RouteComponent,
});
