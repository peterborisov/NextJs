import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { TaskDetails } from "../taskDetails";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
}));

describe("Render TaskDetails", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("render component", () => {
    const form = render(
      <Provider store={store}>
        <TaskDetails taskId={1} />
      </Provider>,
    );
    expect(form).toBeDefined();
  });

  it("All tasks click", () => {
    render(
      <Provider store={store}>
        <TaskDetails taskId={0} />
      </Provider>,
    );

    const mockFn = jest.fn();
    const allTasksBtn = screen.getByText("All tasks");

    expect(allTasksBtn).toBeInTheDocument();

    fireEvent.click(allTasksBtn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it("Task data", async () => {});
});
