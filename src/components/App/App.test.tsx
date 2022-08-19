import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading", () => {
      render(<App />);

      const heading = screen.getByRole("heading", { name: "Users" });

      expect(heading).toBeInTheDocument();
    });
  });
});
