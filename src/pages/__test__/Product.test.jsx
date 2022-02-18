import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from "react-dom/test-utils";
import MockAdapter from "axios-mock-adapter";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { publicRequest } from "../../requestMethods";
import Product from "../Product";



const storeDataMock = {
  _id: '1',
  title: 'Product 1',
  desc: 'Product 1  description',
  img: 'img_path',
  price: 100,
  color: ['blue'],
  size: ['S', 'M', 'L'],
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'path/product/1',
  })
}));

const mockedUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedUseDispatch,
}));

describe('Product page tests', () => {
  let mockRequest;

  beforeEach(() => {
    mockRequest = new MockAdapter(publicRequest);
  });
  afterEach(() => {
    mockRequest.reset();
  });

  it('should render mock data of the Product page after a successful request', async () => {
    mockRequest.onGet('/products/find/1').reply(200, storeDataMock);
    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Product />
          </MemoryRouter>
        </Provider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText(storeDataMock.title)).toBeInTheDocument();
    });
  });

  it('should not render mock data of the Product page after a failed request', async () => {
    mockRequest.onGet('/products/find/1').networkErrorOnce();
    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Product />
          </MemoryRouter>
        </Provider>
      );
    });

    await waitFor(() => {
      expect(screen.queryByText(storeDataMock.title)).not.toBeInTheDocument();
    });
  });

  it('should change quantity value after clicking on the decrease and increase buttons', async () => {
    mockRequest.onGet('/products/find/1').reply(200, storeDataMock);
    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Product />
          </MemoryRouter>
        </Provider>
      );
    });

    const decreaseButton = screen.getByTestId('RemoveIcon');
    const increaseButton = screen.getByTestId('AddIcon');
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);

    await waitFor(() => {
      expect(screen.getByTestId('quantityValue')).toHaveTextContent('1');
    });
  });

  it('should call dispatch function after clicking on Add To Cart button', async () => {
    mockRequest.onGet('/products/find/1').reply(200, storeDataMock);
    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Product />
          </MemoryRouter>
        </Provider>
      );
    });

    const addToCartButton = screen.getByTestId('addToCartButton');
    fireEvent.click(addToCartButton);

    await waitFor(() => {
      expect(mockedUseDispatch).toHaveBeenCalled();
    });
  });

  it('should select size after clicking on the size selection list', async () => {
    mockRequest.onGet('/products/find/1').reply(200, storeDataMock);
    await act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Product />
          </MemoryRouter>
        </Provider>
      );
    });

    const selectSize = screen.getByTestId('selectSize');
    userEvent.selectOptions(selectSize, ['M']);

    await waitFor(() => {
      expect(screen.getByText('M')).toBeInTheDocument();
    });
  });
});
