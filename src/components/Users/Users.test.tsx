import { render } from "../../test-utils/renderWrap";
import { screen } from "@testing-library/react";
import Users from "./Users";
import mockUser from "../../test-utils/mocks/mockUser";

describe("Given a Users component", () => {
  describe("When instantiated", () => {
    test("It should show a list of users", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ users: [mockUser] }),
      });

      await render(<Users />);

      const card = [];
      card.push(
        await screen.findAllByRole("heading", { name: mockUser.name, level: 3 })
      );
      card.push(await screen.findAllByAltText(mockUser.name));
      card.push(await screen.findAllByRole("button", { name: "Friends" }));
      card.push(await screen.findAllByRole("button", { name: "Enemies" }));

      card.forEach((element) => expect(element[0]).toBeInTheDocument());
    });
  });
});
