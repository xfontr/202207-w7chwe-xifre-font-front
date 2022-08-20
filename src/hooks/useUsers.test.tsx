import { ProtoUser, User } from "../store/types/userTypes";
import mockTokenData from "../test-utils/mocks/mockTokenData";
import mockUser from "../test-utils/mocks/mockUser";
import { renderHook, waitFor, Wrapper } from "../test-utils/renderWrap";
import useUsers from "./useUsers";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => () => ({
    dispatch: mockDispatch(),
  }),
}));

jest.mock("../utils/auth", () => () => ({
  getTokenData: jest.fn().mockReturnValue(mockTokenData),
}));

let mockUserByIdReturns: User | any = mockUser;

jest.mock("../utils/getById", () => () => ({
  getUserById: jest.fn().mockReturnValue(mockUserByIdReturns),
}));

describe("Given a signUp function returned by a useUsers function", () => {
  describe("When called with a user as an argument", () => {
    test("Then it should return true if the user was added, and call the dispatch to sign the user up", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(mockUser),
      });
      const userToRegister: ProtoUser = {
        name: "#",
        image: "#",
        biography: "#",
        contacts: { friends: [], enemies: [] },
      };

      const {
        result: {
          current: { signUp },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result = false;
      await waitFor(async () => {
        result = await signUp(userToRegister);
      });

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(result).toBe(true);
    });

    test("Then it should return false if there was an error", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue(new Error()),
      });

      const userToRegister: ProtoUser = {
        name: "#",
        image: "#",
        biography: "#",
        contacts: { friends: [], enemies: [] },
      };

      const {
        result: {
          current: { signUp },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result = false;
      await waitFor(async () => {
        result = await signUp(userToRegister);
      });

      expect(result).toBe(false);
    });
  });
});

describe("Given a signIn function returned by a useUsers function", () => {
  const mockToken = {
    user: {
      token: "##",
    },
  };

  const userToLogin = {
    name: "Pepe",
    password: "#",
  };
  describe("When called with a login data as an argument", () => {
    test("Then it should return true if the user was added, and call the dispatch to sign the user up", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(mockToken),
      });
      const {
        result: {
          current: { signIn },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result = false;
      await waitFor(async () => {
        result = await signIn(userToLogin);
      });

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(result).toBe(true);
    });

    test("Then it should return false if there was an error", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue(new Error()),
      });

      const {
        result: {
          current: { signIn },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result = false;
      await waitFor(async () => {
        result = await signIn(userToLogin);
      });

      expect(result).toBe(false);
    });

    test("Then it should return false no users were found", async () => {
      mockUserByIdReturns = "";
      const {
        result: {
          current: { signIn },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result = false;
      await waitFor(async () => {
        result = await signIn(userToLogin);
      });

      expect(result).toBe(false);
    });
  });
});
