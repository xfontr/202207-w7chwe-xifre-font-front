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

    test("It should show a message 'No users found. Maybe you'd like to talk about us to your friends?' if no users were found", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ users: [] }),
      });

      await render(<Users />);

      const card = [];
      await card.push(
        screen.queryByRole("heading", {
          name: mockUser.name,
          level: 3,
        })
      );
      await card.push(screen.queryByAltText(mockUser.name));
      await card.push(screen.queryByRole("button", { name: "Friends" }));
      await card.push(screen.queryByRole("button", { name: "Enemies" }));
      const message = await screen.findByText(
        "No users found. Maybe you'd like to talk about us to your friends?"
      );

      card.forEach((element) => expect(element).not.toBeInTheDocument());
      expect(message).toBeInTheDocument();
    });
  });
});
