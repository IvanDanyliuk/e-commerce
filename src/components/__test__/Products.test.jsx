import { render, rerender, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from "react-router";
import Products from '../Products';
import { Provider } from "react-redux";
import { store } from '../../redux/store';

const callback = jest.fn();

const MOCK_DATA = {
  products: [
    {
      _id: 'product_1',
      title: 'Product_1',
      desc: 'Product_1', 
      img: 'img_path', 
    },
    {
      _id: 'product_2',
      title: 'Product_2',
      desc: 'Product_2', 
      img: 'img_path', 
    },
    {
      _id: 'product_3',
      title: 'Product_3',
      desc: 'Product_3', 
      img: 'img_path', 
    },
    {
      _id: 'product_4',
      title: 'Product_4',
      desc: 'Product_4', 
      img: 'img_path', 
    },
    {
      _id: 'product_5',
      title: 'Product_5',
      desc: 'Product_5', 
      img: 'img_path', 
    },
    {
      _id: 'product_6',
      title: 'Product_6',
      desc: 'Product_6', 
      img: 'img_path', 
    },
    {
      _id: 'product_7',
      title: 'Product_7',
      desc: 'Product_7', 
      img: 'img_path', 
    },
    {
      _id: 'product_8',
      title: 'Product_8',
      desc: 'Product_8', 
      img: 'img_path', 
    },
  ],
  colors: ['blue']
};

describe('Products component tests', () => {
  let mockRequest;
  beforeEach(() => {
    mockRequest = new MockAdapter(axios);
    
  });
  afterEach(() => {
    mockRequest.reset();
  });


  it('should render mocked list of products after making successful request', async () => {
    mockRequest.onGet('http://localhost:5000/api/products?category=men').reply(200, MOCK_DATA);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products category={'men'} filters={{}} sort={'newest'} getColors={callback} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('productImg')).toHaveLength(MOCK_DATA.products.length);
    });
  });

  it('should not render mocked list of products after request failed', async () => {
    mockRequest.onGet('http://localhost:5000/api/products?category=men').networkErrorOnce();
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products category={'men'} filters={{}} sort={'newest'} getColors={callback} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryAllByTestId('productImg')).toHaveLength(0);
    });
  });

  it('should render mocked list of products after filtering by price', async () => {
    mockRequest.onGet('http://localhost:5000/api/products?category=men').reply(200, MOCK_DATA);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products category={'men'} filters={{}} sort={'asc'} getColors={callback} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('productImg')).toHaveLength(MOCK_DATA.products.length);
    });
  });

  it('should render mocked list of products after making a request without parameters', async () => {
    mockRequest.onGet('http://localhost:5000/api/products').reply(200, MOCK_DATA);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Products category={''} filters={{}} sort={'newest'} getColors={callback} />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('productImg')).toHaveLength(MOCK_DATA.products.length);
    });
  });
});
