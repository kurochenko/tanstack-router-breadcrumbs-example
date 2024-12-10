import { createFileRoute } from '@tanstack/react-router'
import { EmployeesTable } from '@/components/EmployeesTable.tsx'

export const Route = createFileRoute('/organizations/$orgId/employees/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EmployeesTable />
}
