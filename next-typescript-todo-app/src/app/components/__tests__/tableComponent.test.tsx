import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { TableComponent } from "../index";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

let mockData = [
  {
    userId: 1,
    id: 1,
    title: "Test",
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: "Test",
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: "Test",
    completed: true,
  },
];
const state = store.getState().tasksState;
const { filterValue, isChecked, page, sorting, orderBy } = state;

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(
      <Provider store={store}>
        <TableComponent data={mockData} />
      </Provider>,
    );
    expect(taskTable).toBeDefined();
  });

  it("isChecked", () => {
    if (!isChecked) {
      mockData = mockData.filter((item) => item.completed);
    }
  });
});
