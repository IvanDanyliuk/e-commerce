import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { format } from 'timeago.js';


const Container = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #d1d1d1;
  transition: ease 0.5s;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const UserName = styled.div`
  flex: 1;
`;

const Email = styled.div`
  flex: 2;
`;

const RegistrationDate = styled.div`
  flex: 1;
`;

const UpdationDate = styled.div`
  flex: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Edit = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 3px;
  background-color: #03d56c;
  color: #ffffff;
`;

const Delete = styled.button`
  margin-left: 10px;
  padding: 3px 0 0 5px;
  background-color: transparent;
  border: none;
  color: #d12020;
  cursor: pointer;
`;

const UserItem = ({ data, onDelete }) => {
  return (
    <Container>
      <UserName>{data.username}</UserName>
      <Email>{data.email}</Email>
      <RegistrationDate>{format(data.createdAt)}</RegistrationDate>
      <UpdationDate>{format(data.updatedAt)}</UpdationDate>
      <ActionButtons>
        <Edit to='/'>Edit</Edit>
        <Delete onClick={onDelete}>
          <DeleteOutlineIcon />
        </Delete>
      </ActionButtons>
    </Container>
  );
};

export default UserItem;
