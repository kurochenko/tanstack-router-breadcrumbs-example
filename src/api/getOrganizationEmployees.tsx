import { Employee } from "@/api/types.ts";
import { fetchEmployees } from "@/api/fetchEmployees.tsx";

export const getOrganizationEmployees = (orgId: string): Employee[] => {
  return fetchEmployees().filter((employee) => employee.orgId === orgId);
};
