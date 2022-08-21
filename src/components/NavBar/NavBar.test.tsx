import { render, screen } from "../../test-utils/renderWrap";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When instantiated", () => {
    test("It should show 4 navigation links", () => {
      render(<NavBar />);

      const navLinks = [];

      navLinks.push(screen.getByRole("link", { name: "Home" }));
      navLinks.push(screen.getByRole("link", { name: "Sign in" }));
      navLinks.push(screen.getByRole("link", { name: "Sign up" }));
      navLinks.push(screen.getByRole("button", { name: "Sign out" }));

      navLinks.forEach((link) => expect(link).toBeInTheDocument());
    });
  });
});
