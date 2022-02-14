import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Newsletter from '../Newsletter';

describe('Newsletter component tests', () => {
  it('should render the Newsletter component', () => {
    render(
      <Newsletter />
    );
    expect(screen.getByText('Get timely updates from your favorite products.')).toBeInTheDocument();
  });
});
