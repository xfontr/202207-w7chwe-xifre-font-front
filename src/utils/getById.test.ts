import mockUser from "../test-utils/mocks/mockUser";
import getUserById from "./getById";

describe("Given a getUserById function", () => {
  describe("When called with an id as an argument", () => {
    test("Then it should return a user if the API returned a user", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ user: mockUser }),
      });

      const result = await getUserById("1");

      expect(result).toStrictEqual(mockUser);
    });

    test("Then it should return false if the API didn't return a user", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue(new Error()),
      });

      const result = await getUserById("1");

      expect(result).toBe(false);
    });
  });
});
