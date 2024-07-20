import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DropdownComponent } from "../DropdownComponent";
import { Provider } from "react-redux";
import { store } from "@app/store/store";

describe("Render DropdownComponent", () => {
  it("Order by button", () => {
    render(
      <Provider store={store}>
        <DropdownComponent />
      </Provider>,
    );
    const orderByBtn = screen.getByRole("button");

    expect(orderByBtn.textContent).toEqual("Order By");
  });
});
