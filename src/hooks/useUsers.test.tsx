import { ProtoUser } from "../store/types/userTypes";
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
  });
});
