import { render, screen, cleanup } from "@testing-library/react";
import Api from "../Api";

afterEach(() => {
    cleanup();
});

// Does the application start with an empty API request?
test("should render Api component without JSON", () => {
    render(<Api />);
    const apiStartData = screen.getByTestId("start-data");
    expect(apiStartData).toBeInTheDocument();
});
