import { renderHook, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import localStorageMock from "../../test-utils/mocks/localStorageMock";
import { render, Wrapper } from "../../test-utils/renderWrap";

import App from "./App";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

jest.mock("../../utils/auth", () => () => ({
  id: "",
  iat: 111,
  name: "",
}));

jest.mock("../../utils/getById", () => () => ({
  id: "111",
  name: "Pepe",
  image: "#",
  biography: "aaa",
  contacts: {
    friends: [],
    enemies: [],
  },
}));

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("Then it should show a heading", () => {
      render(<App />);

      const heading = screen.getByRole("heading", { name: "Users" });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When instantiated with the user not being logged in", () => {
    test("Then it should show the Sign in form", () => {
      render(<App />);

      const signInHeading = screen.getByRole("heading", {
        name: "Sign in",
      });

      expect(signInHeading).toBeInTheDocument();
    });
  });

  describe("When instantiated with the user being logged in", () => {
    test("Then it should show the HomePage", async () => {
      localStorageMock.setItem("token", "#####");

      Object.defineProperty(window, "localStorage", {
        value: localStorageMock,
      });

      localStorage.setItem("token", "#####");
      await render(<App />);

      const {
        result: { current },
      } = renderHook(
        () => useSelector((state: RootState): any => state.users),
        { wrapper: Wrapper }
      );

      const isUserLogged = current.name ? true : false;
      expect(isUserLogged).toBe(true);
    });
  });
});
