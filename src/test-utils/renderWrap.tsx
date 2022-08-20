import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (view: JSX.Element, ...options: any) =>
  render(view, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
