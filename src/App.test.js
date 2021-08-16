import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const store = createStore(
  allReducers,
);

describe("app testing", ()=> {
  test('renders learn react link', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/Pokemon List/i);
  expect(linkElement).toBeInTheDocument();
});
})

