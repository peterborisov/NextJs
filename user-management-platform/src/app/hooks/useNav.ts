import { BreadcrumbPaths, BreadcrumbItem } from "@components/types";

export const useNav = (param?: string | number) => {
  const paths: Record<BreadcrumbPaths, BreadcrumbItem> = {
    HOME: { path: "/", label: "Home" },
    TASKS: { path: "/tasks", label: "Tasks List" },
    TASK: { label: param },
    USERS: { path: "/users", label: "Users List" },
    USER: { label: param },
  };

  return {
    paths,
  };
};
