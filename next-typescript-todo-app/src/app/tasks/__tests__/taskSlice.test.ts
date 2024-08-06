import tasksSlice, {
  setPage,
  initialState,
  setSorting,
  setOrderBy,
  setOrderByLabel,
  setFilterValue,
  setIsChecked,
} from "../tasks-slice";

describe("tests for tasksSlice", () => {
  it("initialize slice with initialValue", () => {
    const listSliceInit = tasksSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });

  it("setPage", () => {
    const afterReducerOperation = tasksSlice(initialState, setPage(0));
    expect(afterReducerOperation).toEqual(initialState);
  });

  it("setSorting", () => {
    const afterReducerOperation = tasksSlice(initialState, setSorting("acs"));
    expect(afterReducerOperation).toEqual(initialState);
  });

  it("setOrderBy", () => {
    const afterReducerOperation = tasksSlice(initialState, setOrderBy("id"));
    expect(afterReducerOperation).toEqual(initialState);
  });

  it("setOrderByLabel", () => {
    const afterReducerOperation = tasksSlice(
      initialState,
      setOrderByLabel("Order By"),
    );
    expect(afterReducerOperation).toEqual(initialState);
  });

  it("setFilterValue", () => {
    const afterReducerOperation = tasksSlice(initialState, setFilterValue(""));
    expect(afterReducerOperation).toEqual(initialState);
  });
  it("setIsChecked", () => {
    const afterReducerOperation = tasksSlice(initialState, setIsChecked(false));
    expect(afterReducerOperation).toEqual(initialState);
  });
});
