import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import ProductItem from '../ProductItem';


const dataMock = {
  img: 'img_path',
  title: 'Product',
  price: 100,
};

const deleteHandler = jest.fn();

describe('ProductItem component tests', () => {
  it('should render the ProductItem component', () => {
    render(
      <MemoryRouter>
        <ProductItem data={dataMock} onDelete={deleteHandler} />
      </MemoryRouter>
    );
    expect(screen.getByText(dataMock.title)).toBeInTheDocument();
  });
});
