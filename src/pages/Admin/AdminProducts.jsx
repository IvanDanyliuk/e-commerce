import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import ProductItem from '../../components/Admin/ProductItem';
import { getProducts, deleteProduct } from '../../redux/apiCalls';

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
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, products]);

  const handleProductDelete = id => {
    deleteProduct(id, dispatch);
  }

  return (
    <Wrapper>
      <Title>Products</Title>
      <ProductsList>
        {products.map(product => (
          <ProductItem key={product._id} data={product} onDelete={() => handleProductDelete(product._id)} />
        ))}
      </ProductsList>
    </Wrapper>
  );
};

export default AdminProducts;
