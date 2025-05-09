"use client";

import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathName = usePathname();
  const { setOpenMobile } = useSidebar();
  const navLinks = [
    { href: "/", title: "Home", icon: <HomeIcon size={16} /> },
    {
      href: "/generate-program",
      title: "Generate",
      icon: <DumbbellIcon size={16} />,
    },
    { href: "/profile", title: "Profile", icon: <UserIcon size={16} /> },
  ];

  return (
    <Sidebar className="z-99">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary/10 p-1 rounded">
                <ZapIcon className="text-primary w-4 h-4" />
              </div>
              <span className="text-xl font-bold font-sans">
                fitness <span className="text-primary">trainer</span>.ai
              </span>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map(({ href, icon, title }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    onClick={() => setOpenMobile(false)}
                    isActive={
                      (pathName.includes(href) && href !== "/") ||
                      href === pathName
                    }
                    asChild
                  >
                    <Link href={href}>
                      {icon}
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
