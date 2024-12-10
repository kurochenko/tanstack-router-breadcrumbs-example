import { createFileRoute } from "@tanstack/react-router";
import { EmployeeDetail } from "@/components/EmployeeDetail.tsx";
import { getEmployeeByID } from "@/api/getEmployeeByID.tsx";

export const Route = createFileRoute(
  "/organizations/$orgId/employees/$employeeId",
)({
  component: RouteComponent,
  loader: ({ params }) => {
    const { employeeId } = params;
    const employee = getEmployeeByID(employeeId);
    return {
      crumb: `${employee!.name} ${employee!.surname}`,
    };
  },
});

function RouteComponent() {
  return <EmployeeDetail />;
}
