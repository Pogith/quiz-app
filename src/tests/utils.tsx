import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { PropsWithChildren, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import reducer from "@/store/quiz/quizSlice";

const renderWithProvider = (
  ui: ReactNode,
  {
    route = "/",
    store = configureStore({
      reducer: { quiz: reducer },
    }),
    ...renderOptions
  } = {}
) => {
  window.history.pushState({}, "Test page", route);

  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { renderWithProvider as render };
