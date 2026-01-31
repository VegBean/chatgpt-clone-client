import AppHeader from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-screen">
          <AppHeader />
          {/* 页面内容区域 */}
          <main className="p-4 overflow-auto h-full">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
