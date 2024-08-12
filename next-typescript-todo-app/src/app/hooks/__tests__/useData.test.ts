import { renderHook, act } from "@testing-library/react";
import { useData } from "../useData";

describe("useData", () => {
  it("fetches successfully data from an API", async () => {
    const { result } = renderHook(() => useData());

    await act(async () => {
      result.current.fetchTask();
      result.current.fetchTasks();
      result.current.fetchUser();
      result.current.fetchUsers();
    });
  });
});
