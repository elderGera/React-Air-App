import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";

afterEach(() => {
    cleanup();
});

// Is there a form?
test("should render Home component", () => {
    render(<Home />);
    const homeComp = screen.getByTestId("app-form");
    expect(homeComp).toBeInTheDocument();
});
