import { Task } from "@tasks/task-types/task-types";

export const useSorting = () => {
  const sortUserId = (order: string, arr: Task[]) => {
    return order === "acs"
      ? arr.sort((a, b) => (a["userId"] - b["userId"] ? 1 : -1))
      : arr.sort().reverse();
  };

  return {
    sortUserId,
  };
};
