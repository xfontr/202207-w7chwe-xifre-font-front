import {
  addEnemyActionCreator,
  addFriendActionCreator,
} from "../store/slices/userSlice";
import { ProtoUser, User } from "../store/types/userTypes";
import mockTokenData from "../test-utils/mocks/mockTokenData";
import mockUser from "../test-utils/mocks/mockUser";
import { renderHook, waitFor, Wrapper } from "../test-utils/renderWrap";
import useUsers from "./useUsers";

const mockDispatch = jest.fn();
let mockReturns: any;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => () => ({
    dispatch: mockDispatch(mockReturns),
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

describe("Given a getAllUsers function returned from the useUser function", () => {
  describe("When called", () => {
    test("Then it should return a list of all the avaliable users from the API", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ users: [mockUser] }),
      });

      const {
        result: {
          current: { getAllUsers },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: false | User[] = false;
      await waitFor(async () => {
        result = await getAllUsers();
      });

      expect(result).toStrictEqual([mockUser]);
    });

    test("Then it should return false if no users are found", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ users: [] }),
      });

      const {
        result: {
          current: { getAllUsers },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: false | User[] = [];
      await waitFor(async () => {
        result = await getAllUsers();
      });

      expect(result).toBe(false);
    });

    test("Then it should return false if the fetching fails", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue(new Error()),
      });

      const {
        result: {
          current: { getAllUsers },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: false | User[] = [];
      await waitFor(async () => {
        result = await getAllUsers();
      });

      expect(result).toBe(false);
    });
  });
});

describe("Given a addContact function returned from a useUsers function", () => {
  describe("When called with an id, a friend id and a type of contact as arguments", () => {
    test("Then it should return true if a new contact was added", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ addedToContacts: "Success message" }),
      });

      const {
        result: {
          current: { addContact },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: boolean = false;
      await waitFor(async () => {
        result = await addContact("#", "#", "friend");
      });

      expect(result).toBe(true);
    });

    test("Then it should return false if the API didn't add the contact", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ error: "Fail message" }),
      });

      const {
        result: {
          current: { addContact },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: boolean = false;
      await waitFor(async () => {
        result = await addContact("#", "#", "friend");
      });

      expect(result).toBe(false);
    });

    test("Then it should return false if an error was thrown", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockRejectedValue(new Error()),
      });

      const {
        result: {
          current: { addContact },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      let result: boolean = false;
      await waitFor(async () => {
        result = await addContact("#", "#", "friend");
      });

      expect(result).toBe(false);
    });

    test("If a new contact was added, then it should call the dispatch for a new friend", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ addedToContacts: "Success message" }),
      });
      mockReturns = { payload: "#", type: "users/addFriend" };
      const {
        result: {
          current: { addContact },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      await waitFor(async () => {
        await addContact("#", "#", "friend");
      });

      expect(mockDispatch).toHaveBeenCalledWith(addFriendActionCreator("#"));
    });

    test("If a new contact was added, then it should call the dispatch for a new enemy", async () => {
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({ addedToContacts: "Success message" }),
      });
      mockReturns = { payload: "#", type: "users/addEnemy" };
      const {
        result: {
          current: { addContact },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      await waitFor(async () => {
        await addContact("#", "#", "enemy");
      });

      expect(mockDispatch).toHaveBeenCalledWith(addEnemyActionCreator("#"));
    });
  });
});
