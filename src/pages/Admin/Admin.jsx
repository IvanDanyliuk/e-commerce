import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  
`;

const AdminMenu = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  width: 200px;
  list-style: none;
  background-color: #ffffff;
`;

const AdminMenuItem = styled.li`
  margin: 20px 30px;
`;

const AdminContent = styled.div`
  padding: 20px;
  width: 80%;
  box-sizing: border-box;
`;

const AdminMenuLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4b4b4b;
  span {
    margin-right: 5px;
  }

  &.${props => props.activeClassName} {
    color: #13b174;
  }
`;


const Admin = () => {
  const adminPanelRoutes = [
    {path: 'analytics', title: 'Analytics', icon: <DashboardOutlinedIcon />},
    {path: 'users', title: 'Users', icon: <PeopleOutlinedIcon />},
    {path: 'products', title: 'Products', icon: <CardGiftcardOutlinedIcon />},
    {path: 'newproduct', title: 'New product', icon: <AddCircleOutlineOutlinedIcon />},
  ];

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <AdminMenu>
          {adminPanelRoutes.map(section => (
            <AdminMenuItem key={section.path}>
              <AdminMenuLink activeClassName='active' to={section.path}>
                <span>{section.icon}</span>
                {section.title}
              </AdminMenuLink>
            </AdminMenuItem>
          ))}
        </AdminMenu>
        <AdminContent>
          <Outlet />
        </AdminContent>
      </Wrapper>
    </Container>
  );
};

export default Admin;
