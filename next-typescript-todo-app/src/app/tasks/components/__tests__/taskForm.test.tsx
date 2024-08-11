import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { TaskForm } from "../TaskForm";
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

describe("Render TaskForm", () => {
  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <TaskForm />
      </Provider>,
    );
    expect(form).toBeDefined();
  });

  it("On button click", () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>,
    );

    const mockFn = jest.fn();
    const addTaskBtn = screen.getByText("Add task");

    expect(addTaskBtn).toBeInTheDocument();

    fireEvent.click(addTaskBtn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
