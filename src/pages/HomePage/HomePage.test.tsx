import { render, screen } from "../../test-utils/renderWrap";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading with text 'User list'", () => {
      render(<HomePage />);

      const heading = screen.getByRole("heading", { name: "User list" });

      expect(heading).toBeInTheDocument();
    });
  });
});
