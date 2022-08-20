import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When istantiated and receives input from the user", () => {
    test("Then it should update the input value to what the user entered", async () => {
      render(<SignForm isSignIn={false} />);

      const nameInput: HTMLInputElement = screen.getByLabelText("Name");
      await userEvent.type(nameInput, "hello");
      expect(nameInput.value).toBe("hello");

      const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
      await userEvent.type(passwordInput, "hello");
      expect(passwordInput.value).toBe("hello");

      const imageInput: HTMLInputElement =
        screen.getByLabelText("Profile picture");
      await userEvent.type(imageInput, "hello");
      expect(imageInput.value).toBe("hello");

      const biographyInput: HTMLInputElement = screen.getByLabelText(
        "Something about you"
      );
      await userEvent.type(biographyInput, "hello");
      expect(biographyInput.value).toBe("hello");
    });
  });
});
