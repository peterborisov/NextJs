import { Task } from "@task-types/task-types";

export const useSorting = () => {
  const sortUserId = (sortParam: string, arr: Task[]) => {
    return sortParam === "acs"
      ? arr.sort((a, b) => (a["userId"] - b["userId"] ? 1 : -1))
      : arr.sort().reverse();
  };

  return {
    sortUserId,
  };
};
