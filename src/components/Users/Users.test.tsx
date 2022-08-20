import { render } from "../../test-utils/renderWrap";
import { screen } from "@testing-library/react";
import Users from "./Users";
import mockUser from "../../test-utils/mocks/mockUser";

describe("Given a Users component", () => {
  describe("When instantiated", () => {
    test("It should show a list of users", () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue({ users: [mockUser] }),
      });

      render(<Users />);

      const card = [];
      card.push(
        screen.getAllByRole("heading", { name: mockUser.name, level: 3 })
      );
      card.push(screen.getAllByAltText(mockUser.name));
      card.push(screen.getAllByRole("button", { name: "Friends" }));
      card.push(screen.getAllByRole("button", { name: "Enemies" }));

      card.forEach((element) => expect(element[0]).toBeInTheDocument());
    });
  });
});
