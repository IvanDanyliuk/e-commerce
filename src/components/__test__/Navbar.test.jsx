import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from '../../redux/store';
import Navbar from "../Navbar";

const openMenu = () => {
  const menuButton = screen.getByTestId('MenuIcon');
  fireEvent.click(menuButton);
}

describe('Navbar component testing as non-authorized user or authorized customer', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should open a menu by clicking a menu button', () => {
    openMenu();
    expect(screen.getAllByTestId('navLink')).toHaveLength(7);
  });
  
  it('should close a menu by clicking a close button', async () => {
    openMenu();
    const closeButton = screen.getByTestId('CloseIcon');
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryAllByTestId('navLink')).toHaveLength(0);
    })
  });
});

describe('Navbar component testing as authorised admin', () => {
  const storeUserMockInitialState = {
    currentUser: {isAdmin: true},
  }
  const storeCartMockInitialState = {
    quantity: 0,
  }

  it('the administration link should be available', () => {
    const mockCurrentUser = createSlice({
      name: 'user',
      initialState: storeUserMockInitialState,
      reducers: {},
    });

    const mockCart = createSlice({
      name: 'cart',
      initialState: storeCartMockInitialState,
      reducers: {},
    });

    const mockedStore = configureStore({
      reducer: combineReducers({
        user: mockCurrentUser.reducer,
        cart: mockCart.reducer,
      }),
    });

    render(
      <Provider store={mockedStore}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    openMenu();
    expect(screen.getByText('Administration')).toBeInTheDocument();
  });
});