import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { FilterComponent } from "../index";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Render FilterComponent", () => {
  it("on filter change", () => {
    render(
      <Provider store={store}>
        <FilterComponent />
      </Provider>,
    );

    fireEvent.change(screen.getByTestId("task-id"), {
      target: { value: "test" },
    });
  });

  it("on add task", () => {
    render(
      <Provider store={store}>
        <FilterComponent />
      </Provider>,
    );

    const btn = screen.getByTestId("add-task");
    fireEvent.click(btn);
  });

  it("isChecked", () => {
    render(
      <Provider store={store}>
        <FilterComponent />
      </Provider>,
    );

    const btn = screen.getByTestId("completed");
    expect(screen.queryByRole("checkbox")).not.toBeChecked();
    fireEvent.click(btn);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});
