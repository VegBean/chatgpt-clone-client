import { BadgeCheck, CreditCard, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";

export function AppSidebarFooter() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const displayName = user?.username || "未登录";
  const displayEmail = user?.email || "请先登录";
  const avatarFallback = displayName.slice(0, 2).toUpperCase();
  const defaultAvatar =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'><rect width='128' height='128' rx='64' fill='%23E5E7EB'/><circle cx='64' cy='52' r='24' fill='%239CA3AF'/><path d='M24 112c8-22 28-36 40-36s32 14 40 36' fill='%239CA3AF'/></svg>";

  const handleLogout = () => {
    if (!isAuthenticated) return;
    logout();
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground focus:outline-none focus:ring-0 focus-visible:ring-0"
            >
              <Avatar className="h-10 w-10 ">
                <AvatarImage
                  src={isAuthenticated ? "" : defaultAvatar}
                  alt={displayName}
                />
                <AvatarFallback className="rounded-lg">
                  {avatarFallback || "未"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-base">{displayName}</span>
                <span className="truncate text-xs text-gray-500">
                  {isAuthenticated ? "个人账户" : "未登录"}
                </span>
              </div>
              {/* <ChevronsUpDown className="ml-auto size-4" /> */}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={isAuthenticated ? "" : defaultAvatar}
                    alt={displayName}
                  />
                  <AvatarFallback className="rounded-lg">
                    {avatarFallback || "未"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold">{displayName}</span>
                  <span className="truncate text-xs">{displayEmail}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                设置
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                个性化
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem
              onClick={handleLogout}
              disabled={!isAuthenticated}
            >
              <LogOut />
              退出登录
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
      {!isAuthenticated && (
        <SidebarMenuItem>
          <div className="px-2 pb-2">
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() => (window.location.href = "/login")}
            >
              登录
            </Button>
          </div>
        </SidebarMenuItem>
      )}
    </SidebarMenu>
  );
}
