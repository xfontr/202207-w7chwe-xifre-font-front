import { render, screen } from "../../test-utils/renderWrap";
import SignUpPage from "./SignUpPage";

describe("Given a SignUpPage component", () => {
  describe("When instantiated", () => {
    test("Then it should show a sign in form", () => {
      render(<SignUpPage />);

      const inputs = screen.getAllByRole("textbox");
      inputs.push(screen.getByLabelText("Password"));
      const button = screen.getByRole("button", { name: "Sign up" });

      expect(inputs).toHaveLength(4);
      expect(button).toBeInTheDocument();
    });
  });
});
