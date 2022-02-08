import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Chart from '../../components/Admin/Chart';
import { userRequest } from '../../requestMethods';
import DashboardInfo from '../../components/Admin/DasboardInfo';
import WidgetSmall from '../../components/Admin/WidgetSmall';
import WidgetLarge from '../../components/Admin/WidgetLarge';

const Container = styled.div`

`;

const Title = styled.h3`

`;

const Info = styled.div`
  padding: 20px 0;
`;

const Widgets = styled.div`
  display: flex;
`;

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState([]);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats');
        res.data.map(item => {
          setUserStats(prev => [
            ...prev,
            {name: months[item._id - 1], 'Active User': item.total},
          ]);
        });
      } catch (error) {
        console.log(error)
      }
    };
    getStats();
  }, []);

  return (
    <Container>
      <Title>Dashboard</Title>
      <Info>
        <DashboardInfo />
      </Info>
      <Chart data={userStats} title='User Analytics' dataKey='Active User' />
      <Widgets>
        <WidgetSmall />
        <WidgetLarge />
      </Widgets>
    </Container>
  );
};

export default AdminDashboard;
