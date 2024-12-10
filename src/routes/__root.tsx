import { createRootRoute, Outlet } from "@tanstack/react-router";
import { BreadcrumbNav } from "@/components/BreadcrumbNav.tsx";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="px-8 py-4">
        <BreadcrumbNav />
      </div>
      <main className="flex-grow px-8 bg-light">
        <Outlet />
      </main>
    </div>
  ),
});
