import {Link} from "@tanstack/react-router";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {fetchOrganizations} from "@/api/fetchOrganizations.tsx";

export const OrganizationsTable = () => {
  const organizations = fetchOrganizations()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Organization</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {organizations.map((organization) => (
          <TableRow key={organization.id}>
            <TableCell className="font-medium">
              <Link to='/organizations/$orgId' params={{orgId: organization.id}} className='underline'>
                {organization.name}
              </Link>
            </TableCell>
            <TableCell>{organization.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
