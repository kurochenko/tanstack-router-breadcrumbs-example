import {fetchOrganizations} from "@/api/fetchOrganizations.tsx";
import {Organization} from "@/api/types.ts";


export const findOrganizationByID = (orgId: string ): Organization | undefined => {
  return fetchOrganizations().find((org) => org.id === orgId)
}
