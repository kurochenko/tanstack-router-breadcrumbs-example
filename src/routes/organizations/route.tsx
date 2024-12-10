import {createFileRoute, Outlet} from '@tanstack/react-router'

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute('/organizations')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Organizations',
    };
  },
});
