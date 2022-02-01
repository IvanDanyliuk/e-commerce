import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';


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

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: 'none' })};
`;

const SearchContainer = styled.div`
  margin: 0 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })};
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

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ESTORE.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={quantity} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
