import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LogoutButton from '../LogoutButton';

describe('Logout button component tests', () => {
  
  it('should call the Local Storage removeItem method by clicking on the button', () => {
    Object.setPrototypeOf(_localStorage, {
      removeItem: jest.fn(),
    });
    render(
      <LogoutButton />
    );
    const button = screen.getByText('LOG OUT');
    fireEvent.click(button);
    expect(global.localStorage.removeItem).toHaveBeenCalled();
  });
});