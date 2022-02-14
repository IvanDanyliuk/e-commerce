import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { store } from '../../redux/store';
import { MemoryRouter } from "react-router";
import Menu from '../Menu';

const handler = jest.fn();

describe('Menu component tests as an non-authorized user or authorized customer', () => {
  
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Menu toggleMenu={handler} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should not render an administration links', () => {
    expect(screen.queryByText('Administration')).not.toBeInTheDocument();
  });
  
  it('should call the handler function by clicking on a menu element', () => {
    const menuLink = screen.getAllByTestId('navLink')[0];
    fireEvent.click(menuLink);
    expect(handler).toHaveBeenCalled();
  });
});

describe('Menu component tests as admin', () => {
  const storeUserMockInitialState = {
    currentUser: {isAdmin: true},
  };
  const storeCartMockInitialState = {
    quantity: 0,
  };

  it('should render the Administration link', () => {
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
          <Menu toggleMenu={handler} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText('Administration')).toBeInTheDocument();
  });
});
