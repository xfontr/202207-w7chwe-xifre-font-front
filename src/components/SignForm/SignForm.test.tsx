import { render, screen } from "@testing-library/react";
import SignForm from "./SignForm";

describe("Given a SignForm component", () => {
  describe("When instantiated as a Sign In form", () => {
    test("Then it should show 4 input fields and a 'Sign in' button", () => {
      render(<SignForm isSignIn={false} />);

      const nameInput = screen.getByLabelText("Name");
      const passwordInput = screen.getByLabelText("Password");
      const imageInput = screen.getByLabelText("Profile picture");
      const biographyInput = screen.getByLabelText("Something about you");
      const button = screen.getByRole("button", { name: "Sign up" });

      const form = [
        nameInput,
        passwordInput,
        imageInput,
        biographyInput,
        button,
      ];

      form.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When instantiated as a Sign Up form", () => {
    test("Then it should show 2 input fields and a 'Sign up' button", () => {
      render(<SignForm isSignIn={true} />);

      const nameInput = screen.getByLabelText("Name");
      const passwordInput = screen.getByLabelText("Password");
      const imageInput = screen.queryByLabelText("Profile picture");
      const biographyInput = screen.queryByLabelText("Something about you");
      const button = screen.getByRole("button", { name: "Sign in" });

      const renderedForm = [nameInput, passwordInput, button];
      const notRendered = [biographyInput, imageInput];

      renderedForm.forEach((element) => expect(element).toBeInTheDocument());
      notRendered.forEach((element) => expect(element).not.toBeInTheDocument());
    });
  });
});
