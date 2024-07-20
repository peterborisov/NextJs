import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import { FilterComponent } from "../FilterComponent";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Render FilterComponent", () => {
  const onFilterChange = jest.fn();
  const handleChecked = jest.fn();

  it("on filter change", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FilterComponent
          onFilterChange={onFilterChange}
          isChecked={true}
          handleChecked={handleChecked}
        />
      </Provider>,
    );

    fireEvent.change(getByLabelText(/Filter by task ID/i), {
      target: { value: "a" },
    });

    expect(handleChecked).toHaveBeenCalledTimes(0);
  });

  it("on add task", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <FilterComponent
          onFilterChange={onFilterChange}
          isChecked={true}
          handleChecked={handleChecked}
        />
      </Provider>,
    );

    const handleClick = jest.fn();
    const btn = getByTestId("add-task");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
