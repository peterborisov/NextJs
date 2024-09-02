import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TasksList } from "../TasksList";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

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

// const mockRows = [{ userId: 1, id: 1, title: "test", completed: true }];

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(
      <Provider store={store}>
        <TasksList />
      </Provider>,
    );
    expect(taskTable).toBeDefined();
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
