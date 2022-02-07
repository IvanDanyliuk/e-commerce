import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from '../../components/Admin/ProductItem';

const Wrapper = styled.div`

`;

const Title = styled.h3`

`;

const ProductsList = styled.ul`
  margin: 0;
  padding: 20px 0;
  list-style: none;
`;

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  console.log(products)

  return (
    <Wrapper>
      <Title>Products</Title>
      <ProductsList>
        {products.map(product => (
          <ProductItem key={product._id} data={product} />
        ))}
      </ProductsList>
    </Wrapper>
  );
};

export default AdminProducts;
