import { renderHook, act } from "@testing-library/react";
import { useData } from "../useData";

describe("useData", () => {
  it("fetches successfully data from an API", async () => {
    const { result } = renderHook(() => useData());

    await act(async () => {
      result.current.fetchTask("1");
      result.current.fetchTasks();
      result.current.fetchUser("1");
      result.current.fetchUsers();
    });
  });
});
