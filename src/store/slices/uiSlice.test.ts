import { displayActionCreator, IUserInterface, uiReducer } from "./uiSlice";

const mockUi: IUserInterface = {
  isVisible: false,
  state: "error",
};

describe("Given a uiReducer function", () => {
  describe("When called with a false action as an argument", () => {
    test("Then it should return the previous state unaltered", () => {
      const fakeAction = {
        type: "",
      };

      const result = uiReducer(mockUi, fakeAction);

      expect(result).toEqual(mockUi);
    });
  });

  describe("When called with a display action with true as a payload", () => {
    test("Then it should the ui with isVisible true", () => {
      const payload = true;
      const expectedUi = { ...mockUi, isVisible: payload };
      const action = displayActionCreator(payload);

      const result = uiReducer(mockUi, action);
      expect(result).toEqual(expectedUi);
    });
  });
});
