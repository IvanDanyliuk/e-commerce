import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Categories from '../Categories';
import { categories } from '../../data';

describe('Categories component tests', () => {
  it('should render category links', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(categories.length);
  });
});
