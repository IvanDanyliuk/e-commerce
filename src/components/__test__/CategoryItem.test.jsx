import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router";
import CategoryItem from '../CategoryItem';

describe('CategoryItem component tests', () => {
  const mockData = {
    category: 'men',
    img: 'img_path',
    title: 'Men',
  };

  it('should render the CategoryItem component', () => {
    render(
      <MemoryRouter>
        <CategoryItem categoryData={mockData} />
      </MemoryRouter>
    );
    expect(screen.getByText('Men')).toBeInTheDocument();
  });
});