import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import WidgetLarge from '../WidgetLarge';
import { userRequest } from '../../../requestMethods';


const ordersMock = [
  {
    _id: 'order_1',
    address: 'Ukraine',
    amount: 50,
    products: [
      {
        _id: 'product_1',
        productId: 'product_1',
        quantity: 2,
      },
      {
        _id: 'product_2',
        productId: 'product_2',
        quantity: 1,
      },
    ],
    status: 'pending',
    userId: 'user_1',
    createdAt: '2022-02-15',
    createdAt: '2022-02-15',
  },
  {
    _id: 'order_2',
    address: 'Ukraine',
    amount: 100,
    products: [
      {
        _id: 'product_1',
        productId: 'product_1',
        quantity: 2,
      },
      {
        _id: 'product_2',
        productId: 'product_2',
        quantity: 1,
      },
    ],
    status: 'pending',
    userId: 'user_2',
    createdAt: '2022-02-15',
    createdAt: '2022-02-15',
  },
];

describe('WidgetLarge component tests', () => {
  let mockedUserRequest;

  beforeEach(() => {
    mockedUserRequest = new MockAdapter(userRequest);
  });
  afterEach(() => {
    mockedUserRequest.reset();
  });

  it('should render the list of orders after a successful request', async () => {
    mockedUserRequest.onGet('orders').reply(200, ordersMock);
    await act(() => {
      render(
        <WidgetLarge />
      );
    });

    expect(screen.getAllByTestId('rowItem')).toHaveLength(ordersMock.length);
  });

  it('should render the list of orders after a failed request', async () => {
    mockedUserRequest.onGet('orders').networkErrorOnce();
    await act(() => {
      render(
        <WidgetLarge />
      );
      expect(screen.queryAllByTestId('rowItem')).toHaveLength(0);
    });
  });
});
