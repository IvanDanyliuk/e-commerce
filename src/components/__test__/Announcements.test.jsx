import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Announcements from "../Announcements";

describe('Announcements component tests', () => {
  it('should render the Announcements component', () => {
    render(
      <Announcements />
    );
    expect(screen.getByText('Super Deal! Free Shipping on Orders Over $50')).toBeInTheDocument();
  });
});
