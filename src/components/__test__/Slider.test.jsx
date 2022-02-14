import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Slider from '../Slider';
import { sliderItems } from '../../data';

describe('Slider component tests', () => {
  beforeEach(() => {
    render(
      <Slider />
    )
  })
  it('should change slide after clicking on the left arrow button', async () => {
    const leftButton = screen.getByTestId('arrowLeft');
    fireEvent.click(leftButton);
    await waitFor(() => {
      screen.debug()
      expect(screen.getByText(sliderItems[sliderItems.length - 1].title)).toBeInTheDocument();
    })
  });
  it('should change slide after clicking on the right arrow button', async () => {
    const rightButton = screen.getByTestId('arrowRight');
    fireEvent.click(rightButton);
    await waitFor(() => {
      screen.debug()
      expect(screen.getByText(sliderItems[1].title)).toBeInTheDocument();
    })
  });
});