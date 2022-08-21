import { render, screen } from "../../test-utils/renderWrap";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When instantiated", () => {
    test("It should show 3 navigation links", () => {
      render(<NavBar />);

      screen.getByRole("link", { name: "Home" });
      screen.getByRole("link", { name: "Sign in" });
      screen.getByRole("link", { name: "Sign out" });
    });
  });
});
