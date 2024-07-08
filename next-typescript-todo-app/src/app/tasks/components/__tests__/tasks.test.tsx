import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Tasks } from "../tasks";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Render Tasks", () => {
  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    );
    expect(form).toBeDefined();
  });

  it("On add task", () => {
    render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    );
    const mockFn = jest.fn();
    const addTaskBtn = screen.getByText("Add Task");

    expect(addTaskBtn).toBeInTheDocument();

    fireEvent.click(addTaskBtn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
