import { useParams } from "@tanstack/react-router";
import { getEmployeeByID } from "@/api/getEmployeeByID.tsx";

export const EmployeeDetail = () => {
  const { employeeId } = useParams({
    from: "/organizations/$orgId/employees/$employeeId",
  });

  const employee = getEmployeeByID(employeeId)!;
  return (
    <div>
      {employee.name} {employee.surname}
    </div>
  );
};
