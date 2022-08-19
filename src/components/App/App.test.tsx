import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: "Users" });

      expect(heading).toBeInTheDocument();
    });
  });
});
