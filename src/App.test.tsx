import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders without error", () => {
    render(<App />);
    expect(screen.getByText("Example Cards")).toBeInTheDocument();
  });

  test("renders the ThemeButton", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: "Theme Button" })
    ).toBeInTheDocument();
  });

  describe("App", () => {
    test("renders 3 Card components", () => {
      render(<App />);
      const cardComponents = screen.getAllByTestId("card-component");
      expect(cardComponents.length).toBe(3);
    });
  });
});
