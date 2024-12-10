import {createFileRoute} from '@tanstack/react-router'
import {OrganizationsTable} from "@/components/OrganizationsTable.tsx";

export const Route = createFileRoute('/organizations/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OrganizationsTable />
}
