import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from '../../redux/store';
import Home from "../Home";

describe('Home page tests', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
  });
  it('should render the Navbar', () => {
    expect(screen.getAllByText('ESTORE.')[0]).toBeInTheDocument();
  });
});