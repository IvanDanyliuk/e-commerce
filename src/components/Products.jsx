import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort, getColors }) => {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category 
            ? `http://localhost:5000/api/products?category=${category}` 
            : 'http://localhost:5000/api/products'
        );
        setProducts(response.data.products);
        setColors(response.data.colors);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    getColors && getColors(colors);
  }, [category, colors]);

  useEffect(() => {
    category && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
    );
  }, [products, category, filters, colors]);

  useEffect(() => {
    if(sort === 'newest') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if(sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {
        category 
          ? filteredProducts.map(product => (
              <Product key={product.id} productData={product} />
            )) 
          : products.slice(0, 8).map(product => (
              <Product key={product.id} productData={product} />
            ))
      }
    </Container>
  );
};

export default Products;
