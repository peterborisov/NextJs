import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TasksTable } from "../tasks-table";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: jest.fn(() => null),
    };
  },
}));

const mockRows = [{ userId: "1", id: 1, title: "test", completed: true }];

describe("Render TasksTable", () => {
  it("render component", () => {
    const taskTable = render(<TasksTable rows={mockRows} />);
    expect(taskTable).toBeDefined();
  });

  it("On task details", () => {
    render(<TasksTable rows={mockRows} />);

    const mockFn = jest.fn();
    const taskDetailsBtn = screen.getAllByText("Task Details")[0];

    expect(taskDetailsBtn).toBeInTheDocument();

    fireEvent.click(taskDetailsBtn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
