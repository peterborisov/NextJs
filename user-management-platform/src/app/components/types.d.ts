type BreadcrumbItem = {
  path?: string;
  label?: string | number;
};

export type BreadcrumbItems = {
  breadcrumbItems: BreadcrumbItem[];
};

export type BreadcrumbPaths = "HOME" | "TASKS" | "TASK" | "USERS" | "USER";
