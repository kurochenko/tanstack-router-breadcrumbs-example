import { createFileRoute, Outlet } from "@tanstack/react-router";
import { findOrganizationByID } from "@/api/getOrganizationByID.tsx";

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute("/organizations/$orgId")({
  component: RouteComponent,
  loader: ({params}) => {
    const { orgId } = params;
    const organization = findOrganizationByID(orgId);
    return {
      crumb: organization!.name,
    }
  },
});
