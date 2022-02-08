import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { userRequest } from '../../requestMethods';

const Container = styled.div`
  flex: 2;
`;

const Title = styled.h6`
  font-size: 14px;
`;

const Table = styled.table`
  margin-top: 10px;
  width: 100%;
`;

const Row = styled.tr``;

const HeadingCell = styled.th`
  padding: 10px 0;
  text-align: left;
`;

const Cell = styled.td``;

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        setOrders(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getOrders();
  }, []);

  console.log(orders)

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <Row>
          <HeadingCell>Customer</HeadingCell>
          <HeadingCell>Customer</HeadingCell>
          <HeadingCell>Customer</HeadingCell>
          <HeadingCell>Status</HeadingCell>
        </Row>
        {orders.map(order => (
          <Row key={order._id}>
            <Cell>{order.userId}</Cell>
            <Cell>{format(order.createdAt)}</Cell>
            <Cell>${order.amount}</Cell>
            <Cell>{order.status}</Cell>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default WidgetLarge;
