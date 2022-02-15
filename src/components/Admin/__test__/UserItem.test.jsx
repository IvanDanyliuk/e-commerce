import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import UserItem from '../UserItem';

const dataMock = {
  username: 'User 1',
  email: 'user@gmail.com',
  createdAt: '2022-02-15',
  updatedAt: '2022-02-15',
};

const deleteHandler = jest.fn();

describe('UserItem component tests', () => {
  it('should render the UserInfo component', () => {
    render(
      <MemoryRouter>
        <UserItem data={dataMock} onDelete={deleteHandler} />
      </MemoryRouter>
    );
    expect(screen.getByText(dataMock.username)).toBeInTheDocument();
  });
});
