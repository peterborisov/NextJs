"use client";

import { AddUserForm } from "./AddUserForm";
import { BreadcrumbComponent } from "@components/index";
import { useNav } from "@hooks/index";

const Page = () => {
  const {
    paths: { HOME, USERS },
  } = useNav();
  return (
    <>
      <BreadcrumbComponent breadcrumbItems={[HOME, USERS]} />
      <AddUserForm />
    </>
  );
};

export default Page;
