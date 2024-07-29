import { FC } from "react";
import { Breadcrumb } from "flowbite-react";
import { BreadcrumbItems } from "./types";

export const BreadcrumbComponent: FC<BreadcrumbItems> = ({
  breadcrumbItems,
}) => {
  return (
    <>
      <Breadcrumb className="my-4 px-5 py-3" aria-label="Default breadcrumb">
        {breadcrumbItems.map((item) => {
          return (
            <Breadcrumb.Item key={item.label} href={item.path}>
              {item.label}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};
