import { createFileRoute } from "@tanstack/react-router";
import { EmployeesTable } from "@/components/EmployeesTable.tsx";

export const Route = createFileRoute("/organizations/$orgId/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EmployeesTable />;
}
