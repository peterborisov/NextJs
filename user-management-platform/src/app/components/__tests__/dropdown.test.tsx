import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Provider } from "react-redux";

import { store } from "@app/store/store";
import { DropdownComponent } from "../index";

describe("Render DropdownComponent", () => {
  it("Order by button", async () => {
    render(
      <Provider store={store}>
        <DropdownComponent />
      </Provider>,
    );
    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown.textContent).toEqual("Order By");
  });
});
