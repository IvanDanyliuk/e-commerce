import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router";
import Product from '../Product';

describe('Product component tests', () => {
  const dataMock = {
    img: 'img_path',
    _id: 'product_id',
  };

  it('should render the Product component', () => {
    render(
      <MemoryRouter>
        <Product productData={dataMock} />
      </MemoryRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
