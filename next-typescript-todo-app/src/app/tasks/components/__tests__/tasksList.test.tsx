import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TasksList } from "../tasks-list";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
  useSearchParams: () => ({
    get: () => {},
  }),
}));

const mockRows = [{ userId: 1, id: 1, title: "test", completed: true }];

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(<TasksList rows={mockRows} />);
    expect(taskTable).toBeDefined();
  });

  it("On task details", () => {
    render(<TasksList rows={mockRows} />);

    const mockFn = jest.fn();
    const taskDetailsBtn = screen.getAllByText("Task Details")[0];

    expect(taskDetailsBtn).toBeInTheDocument();

    fireEvent.click(taskDetailsBtn);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  // it("Fetch tasks", async () => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(mockRows),
  //     }),
  //   );

  //   render(<TasksList rows={mockRows} />);

  //   expect(screen.getByText(/user list/i)).toBeInTheDocument();

  //   const userListItems = await screen.findAllByRole("listitem");
  //   expect(userListItems).toHaveLength(2);

  //   // Verify that fetch was called with the correct URL
  //   expect(fetch).toHaveBeenCalledWith(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  // });
});
