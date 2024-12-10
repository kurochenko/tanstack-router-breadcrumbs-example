import { Link, useParams } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { getOrganizationEmployees } from "@/api/getOrganizationEmployees.tsx";

export const EmployeesTable = () => {
  const { orgId } = useParams({ from: "/organizations/$orgId" });
  const employees = getOrganizationEmployees(orgId);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">
              <Link
                to="/organizations/$orgId/employees/$employeeId"
                params={{ orgId: employee.orgId, employeeId: employee.id }}
                className="underline"
              >
                {employee.name} {employee.surname}
              </Link>
            </TableCell>
            <TableCell>{employee.age}</TableCell>
            <TableCell>{employee.position}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
