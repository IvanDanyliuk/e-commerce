import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { MemoryRouter } from 'react-router';
import Login from '../Login';

const currentUserMockDataSuccess = {
  currentUser: {
    _id: 'currentUserId',
    username: 'mrbean',
    email: 'mrbean@gmail.com',
    password: '123456',
  },
  isFetching: true,
  error: false
};

const currentUserMockDataError = {
  currentUser: {
    _id: 'currentUserId',
    username: 'mrbean',
    email: 'mrbean@gmail.com',
    password: '123456',
  },
  isFetching: false,
  error: true
};

const mockedUseNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Login page tests', () => {
  const mockStore = initialState => {
    const currentUserSliceMock = createSlice({
      name: 'user',
      initialState: initialState,
      reducers: {},
    });
    const mockedStore = configureStore({
      reducer: combineReducers({
        user: currentUserSliceMock.reducer,
      }),
    });
    return mockedStore;
  };

  const fillAndSubmitForm = () => {
    const usernameInput = screen.getByTestId('username');
    const passwordInput = screen.getByTestId('password');
    const loginButton = screen.getByTestId('loginButton');

    fireEvent.change(usernameInput, { target: { value: 'mrbean' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
  };

  it('should call navigate hook after filling and submitting the login form when the user is non-authorized', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    fillAndSubmitForm();

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });

  it('should not call navigate hook after filling and submitting the login form when the user is authorized', async () => {
    const mockedStoreSuccess = mockStore(currentUserMockDataSuccess);
    render(
      <Provider store={mockedStoreSuccess}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    fillAndSubmitForm();

    await waitFor(() => {
      expect(mockedUseNavigate).not.toHaveBeenCalled();
    });
  });

  it('should show the error message in case of error', async () => {
    const mockedStoreSuccess = mockStore(currentUserMockDataError);
    render(
      <Provider store={mockedStoreSuccess}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    fillAndSubmitForm();

    await waitFor(() => {
      expect(screen.getByTestId('errorMessage')).toBeInTheDocument();
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  })
});
