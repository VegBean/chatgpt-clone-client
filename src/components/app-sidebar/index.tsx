import * as React from "react";
import {
  Chromium,
  Folder,
  Frame,
  Map,
  MoreHorizontal,
  PieChart,
  Trash2,
} from "lucide-react";
import { AppSidebarFooter } from "@/components/app-sidebar/sidebar-footer";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// This is sample data.
const data = {
  items: [
    {
      name: "新聊天",
      url: "#",
      icon: Frame,
    },
    {
      name: "搜索聊天",
      url: "#",
      icon: PieChart,
    },
    {
      name: "图片生成",
      url: "#",
      icon: Map,
    },
    {
      name: "视频生成",
      url: "#",
      icon: Map,
    },
    {
      name: "关于作者",
      url: "#",
      icon: Map,
    },
  ],
  chats: [
    { name: "Axios 异步请求学习", url: "#" },
    { name: "Hono React 登录认证", url: "#" },
    { name: "控制台输出问题解析", url: "#" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-left pl-4">
        <Chromium strokeWidth={1.25} />
      </SidebarHeader>
      <SidebarContent>
        {/* 功能列表 */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 聊天列表 */}
        <SidebarGroup>
          <SidebarGroupLabel>聊天</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.chats.map((chat) => (
                <SidebarMenuItem key={chat.name}>
                  <SidebarMenuButton asChild>
                    <a href={chat.url}>
                      <span>{chat.name}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 rounded-lg">
                      <DropdownMenuItem>
                        <Folder className="text-muted-foreground" />
                        <span>重命名</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2 className="text-muted-foreground" />
                        <span className="text-red-500">删除聊天</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* 页脚用户项 */}
      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
