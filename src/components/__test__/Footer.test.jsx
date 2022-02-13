import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer tests', () => {
  it('should render the Footer component', () => {
    render(
      <Footer />
    );

    screen.debug();
  });
});
