import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import { userRequest } from '../../../requestMethods';
import WidgetSmall from '../WidgetSmall';

const usersMock = [
  {
    _id: 'user_1',
    username: 'admin',
    firstName: 'Rowan',
    lastName: 'Atkinson',
    isAdmin: true,
    email: 'admin@gmail.com',
    password: '123456',
    createdAt: '2022-02-15',
    updatedAt: '2022-02-15',
  },
  {
    _id: 'user_2',
    username: 'customer',
    firstName: 'Johnny',
    lastName: 'English',
    isAdmin: false,
    email: 'johnny@gmail.com',
    password: '123456',
    createdAt: '2022-02-15',
    updatedAt: '2022-02-15',
  },
];

describe('WidgetSmall component tests', () => {
  let userRequestMock;

  beforeEach(() => {
    userRequestMock = new MockAdapter(userRequest);
  });
  afterEach(() => {
    userRequestMock.reset();
  });

  it('should render list of users after successful request', async () => {
    userRequestMock.onGet('users/?new=true').reply(200, usersMock);
    await act(() => {
      render(
        <WidgetSmall />
      );
    });
    expect(screen.getAllByTestId('userItem')).toHaveLength(usersMock.length);
  });

  it('should render list of users after failed request', async () => {
    userRequestMock.onGet('users/?new=true').networkErrorOnce();
    await act(() => {
      render(
        <WidgetSmall />
      );
    });
    expect(screen.queryAllByTestId('userItem')).toHaveLength(0);
  });
});
