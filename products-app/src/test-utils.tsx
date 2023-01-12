import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import { store } from "./store/store";

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options });
