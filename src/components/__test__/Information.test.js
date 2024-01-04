import { render, screen, cleanup } from "@testing-library/react";
import Information from "../Information";

afterEach(() => {
    cleanup();
});

// Is there a sample JSON's file?
test("should render Information component", () => {
    render(<Information />);
    const homeComp = screen.getByTestId("example");
    expect(homeComp).toBeInTheDocument();
});
