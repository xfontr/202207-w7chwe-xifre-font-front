import mockUser from "../../test-utils/mocks/mockUser";
import { render, screen } from "../../test-utils/renderWrap";
import User from "./User";

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
});
