import userEvent from "@testing-library/user-event";
import mockUser from "../../test-utils/mocks/mockUser";
import { render, screen } from "../../test-utils/renderWrap";
import User from "./User";

const mockAddContact = jest.fn();

jest.mock("../../hooks/useUsers", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUsers"),
  default: () => ({
    addContact: () => mockAddContact(),
  }),
}));

describe("Given a User component", () => {
  describe("When instantiated with a User as props", () => {
    test("Then it should show the user profile picture, name and 2 option buttons", () => {
      render(<User user={mockUser} />);

      const imageWithAltText = screen.getByAltText(mockUser.name);
      const name = screen.getByRole("heading", { name: mockUser.name });
      const buttons = screen.getAllByRole("button");

      expect(imageWithAltText).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(buttons).toHaveLength(2);
    });
  });

  describe("When clicked the add enemy button", () => {
    test("Then it should call a functin addContact", async () => {
      render(<User user={mockUser} />);

      const button = screen.getByRole("button", { name: "Enemies" });

      await userEvent.click(button);

      expect(mockAddContact).toHaveBeenCalled();
    });
  });

  describe("When clicked the add friend button", () => {
    test("Then it should call a functin addContact", async () => {
      render(<User user={mockUser} />);

      const button = screen.getByRole("button", { name: "Friends" });

      await userEvent.click(button);

      expect(mockAddContact).toHaveBeenCalled();
    });
  });
});
