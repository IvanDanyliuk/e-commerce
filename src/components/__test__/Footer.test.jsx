import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { MemoryRouter } from "react-router";

describe('Footer tests', () => {
  it('should render the Footer component', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(8);
  });
});
