import mockUser from "../../test-utils/mocks/mockUser";
import { signUpActionCreator, usersReducer, usersSlice } from "./userSlice";

describe("Given a usersSlice variable", () => {
  describe("When called", () => {
    test("It should create a slice", () => {
      const result = usersSlice;

      expect(result).toHaveProperty("actions");
      expect(result).toHaveProperty("caseReducers");
      expect(result).toHaveProperty("getInitialState");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("reducer");
    });
  });
});

describe("Given a usersReducer function", () => {
  describe("When called with a false action as an argument", () => {
    test("Then it should return the previous state unaltered", () => {
      const fakeAction = {
        type: "",
      };

      const result = usersReducer(mockUser, fakeAction);

      expect(result).toEqual(mockUser);
    });
  });

  describe("When called with a signUp action with a new user as a payload", () => {
    test("Then it should return a new user", () => {
      const expectedUser = { ...mockUser, id: "2", name: "Roberto" };
      const action = signUpActionCreator(expectedUser);

      const result = usersReducer(mockUser, action);
      expect(result).toEqual(expectedUser);
    });
  });
});
