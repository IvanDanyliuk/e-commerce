import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
  color: #000000;
  ${mobile({ 
    marginLeft: '10px', 
    fontSize: '12px' 
  })};
`;

const LogoutButton = () => {
  const handleLogoutClick = () => {
    localStorage.removeItem('persist:root');
  };

  return (
    <Container onClick={handleLogoutClick}>LOG OUT</Container>
  );
};

export default LogoutButton;