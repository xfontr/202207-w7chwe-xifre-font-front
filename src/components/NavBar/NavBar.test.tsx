import { signOutActionCreator } from "../../store/slices/userSlice";
import { fireEvent, render, screen } from "../../test-utils/renderWrap";
import NavBar from "./NavBar";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => () => ({
    dispatch: mockDispatch({ payload: undefined, type: "users/signOut" }),
  }),
}));

describe("Given a NavBar component", () => {
  describe("When instantiated", () => {
    test("It should show 4 navigation links", () => {
      render(<NavBar />);

      const navLinks = [];

      navLinks.push(screen.getByRole("link", { name: "Home" }));
      navLinks.push(screen.getByRole("link", { name: "Sign in" }));
      navLinks.push(screen.getByRole("link", { name: "Sign up" }));
      navLinks.push(screen.getByRole("button", { name: "Sign out" }));

      navLinks.forEach((link) => expect(link).toBeInTheDocument());
    });
  });

  describe("When clicking the Sign out button", () => {
    test("It should call navigate function to /sign-in", () => {
      render(<NavBar />);
      const button = screen.getByRole("button", { name: "Sign out" });

      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });

    test("It should also call the dispatch to sign out", () => {
      render(<NavBar />);
      const button = screen.getByRole("button", { name: "Sign out" });

      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalledWith(signOutActionCreator());
    });
  });
});
