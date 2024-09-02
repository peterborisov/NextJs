import { render } from "@testing-library/react";
import Loading from "../loading";

describe("Render Page", () => {
  it("render component", () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toBeDefined();
  });
});
