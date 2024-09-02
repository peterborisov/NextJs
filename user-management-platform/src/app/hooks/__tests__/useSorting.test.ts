import { renderHook } from "@testing-library/react";
import { useSorting } from "../useSorting";

describe("useCounter", () => {
  it("should render sortUserId", () => {
    const { result } = renderHook(useSorting);
    const sortUserId = result.current.sortUserId("acs", []);
    expect(sortUserId).toBeDefined();
  });
});
