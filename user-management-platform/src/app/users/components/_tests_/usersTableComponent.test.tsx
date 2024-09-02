import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { UsersTableComponent } from "../index";

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
    id: 9,
    name: "Test",
    username: "Test",
    email: "Test",
  },
  {
    id: 9,
    name: "Test",
    username: "Test",
    email: "Test",
  },
  {
    id: 9,
    name: "Test",
    username: "Test",
    email: "Test",
  },
];

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(
      <Provider store={store}>
        <UsersTableComponent data={mockData} />
      </Provider>,
    );
    expect(taskTable).toBeDefined();
  });

  it("task details", () => {
    render(
      <Provider store={store}>
        <UsersTableComponent data={mockData} />
      </Provider>,
    );
    const btn = screen.getAllByTestId("user-details");
    fireEvent.click(btn[0]);
  });
});
