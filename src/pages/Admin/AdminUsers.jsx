import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import UserItem from '../../components/Admin/UserItem';
import { getUsers, deleteUser } from '../../redux/apiCalls';

const Wrapper = styled.div``;

const Title = styled.h3``;

const UsersList = styled.ul`
  margin: 0;
  padding: 20px 0;
  list-style: none;
`;

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const handleUserDelete = id => {
    deleteUser(id, dispatch);
  }

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Users</Title>
      <UsersList>
        {users.map(user => (
          <UserItem key={user._id} data={user} onDelete={() => handleUserDelete(user._id)} />
        ))}
      </UsersList>
    </Wrapper>
  );
};

export default AdminUsers;
