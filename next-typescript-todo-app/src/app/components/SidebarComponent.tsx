"use client";
import { memo } from "react";
import { Sidebar } from "flowbite-react";
import {
  HomeIcon,
  UsersIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const SidebarComponent = () => {
  return (
    <Sidebar
      className="h-[100vh] w-full bg-gray-400"
      aria-label="Sidebar with logo branding"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HomeIcon}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/users" icon={UsersIcon}>
            Users list
          </Sidebar.Item>
          <Sidebar.Item href="/tasks" icon={PencilSquareIcon}>
            Tasks list
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default memo(SidebarComponent);
