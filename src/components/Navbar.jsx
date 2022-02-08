import { useState } from 'react';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from './Menu';


const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })};
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const MenuLink = styled(MenuIcon)`
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })};
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ 
    flex: 2,
    justifyContent: 'center' 
  })};
`;

const MenuItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  font-size: 14px;
  ${mobile({ 
    marginLeft: '10px', 
    fontSize: '12px' 
  })};
`;

const Close = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  z-index: 10;
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      {
        isMenuOpen && (
          <>
            <Menu />
            <Close onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <CloseIcon />
            </Close>
          </>
        )
      }
      <Wrapper>
        <Left>
          <MenuLink onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </Left>
        <Center>
          <Logo>ESTORE.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to={'/cart'}>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
