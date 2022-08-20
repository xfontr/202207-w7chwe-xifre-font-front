import { render, screen } from "../../test-utils/renderWrap";
import SignInPage from "./SignInPage";

describe("Given a SignInPage component", () => {
  describe("When instantiated", () => {
    test("Then it should show a sign in form", () => {
      render(<SignInPage />);

      const inputs = screen.getAllByRole("textbox");
      inputs.push(screen.getByLabelText("Password"));
      const button = screen.getByRole("button", { name: "Sign in" });

      expect(inputs).toHaveLength(2);
      expect(button).toBeInTheDocument();
    });
  });
});
