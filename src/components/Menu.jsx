import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const MenuContainer = styled.nav`
  padding: 30px;
  width: 30vw;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  transition: .2s all ease-in-out;

  ${mobile({
    width: '75vw',
  })}
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationItem = styled.li`
  margin-top: ${props => props.type === 'item' ? '20px' : '10px'};
  padding-left: ${props => props.type === 'item' ? '0px' : '10px'};
  font-size: ${props => props.type === 'item' ? '20px' : '18px'};
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  padding: 5px 0;
  text-decoration: none;
  letter-spacing: 2px;
  color: #000000;
  
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 0%;
    height: 1px;
    background-color: #000000;
    transition: width ease 0.7s;
  }
  &:hover:after {
    width: 100%;
  }
`;



const Menu = ({ toggleMenu }) => {
  const menuData = [
    {type: 'item', to: '/',  title: 'Home'},
    {type: 'item', to: '/products', title: 'Products'},
    {type: 'subItem', to: '/products/women', title: 'Women'},
    {type: 'subItem', to: '/products/men', title: 'Men'},
    {type: 'subItem', to: '/products/kids', title: 'Kids'},
    {type: 'item', to: '/register', title: 'Register'},
    {type: 'item', to: '/login', title: 'Login'},
  ]

  const isAdmin = useSelector(state => state.user.currentUser);

  return (
    <Drawer onClick={toggleMenu}>
      <MenuContainer>
        <Navigation>
          {menuData.map(menuItem => (
            <NavigationItem type={menuItem.type} key={menuItem.title}>
              <NavigationLink to={menuItem.to} data-testid='navLink' onClick={toggleMenu}>{menuItem.title}</NavigationLink>
            </NavigationItem>
          ))}
          {
            isAdmin && (
              <NavigationItem type='item'>
                <NavigationLink to='/admin' onClick={toggleMenu}>Administration</NavigationLink>
              </NavigationItem>
            )
          }

        </Navigation>
      </MenuContainer>
      
    </Drawer>
  );
};

export default Menu;
