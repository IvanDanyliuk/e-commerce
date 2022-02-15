import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { userRequest } from '../../requestMethods';

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h6`
  font-size: 14px;
`;

const UserList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 10px;
  list-style: none;
`;

const UserItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 30px;
`;

const UserName = styled.div``;

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('users/?new=true');
        setUsers(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>New Members</Title>
      <UserList>
        {users.map(user => (
          <UserItem data-testid='userItem'>
            <Avatar src={user.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU'} alt='avatar' />
            <UserName>
              {user.username}
            </UserName>
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
};

export default WidgetSmall;
