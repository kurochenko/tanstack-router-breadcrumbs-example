import { Employee } from "@/api/types.ts";
import { fetchEmployees } from "@/api/fetchEmployees.tsx";

export const getEmployeeByID = (employeeId: string): Employee | undefined => {
  return fetchEmployees().find((employee) => employee.id === employeeId);
};
