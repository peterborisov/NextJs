import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { TableComponent } from "../TableComponent";
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

describe("Render TasksList", () => {
  it("render component", () => {
    const taskTable = render(
      <Provider store={store}>
        <TableComponent filterValue="" isChecked data={[]} />
      </Provider>,
    );
    expect(taskTable).toBeDefined();
  });
});
