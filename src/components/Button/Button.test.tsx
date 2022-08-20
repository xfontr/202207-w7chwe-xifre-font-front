import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated", () => {
    test("It should show a button element", () => {
      const mockFunction = jest.fn();
      render(
        <Button type={"button"} action={mockFunction()} content={"Hello"} />
      );
      const buttonElement = screen.getByRole("button", { name: "Hello" });

      expect(buttonElement).not.toBeNull();
    });

    test("And when clicked on, it should call the function passed via props", async () => {
      const mockFunction = jest.fn();
      render(
        <Button type={"button"} action={mockFunction()} content={"Hello"} />
      );
      const buttonElement = screen.getByRole("button");

      await userEvent.click(buttonElement);
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
