import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../layout";

describe("Render RootLayout", () => {
  it("should render correct", () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>,
    );

    expect(getByText("Test")).toBeInTheDocument();
  });
});
