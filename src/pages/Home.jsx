import React from 'react';
import Categories from '../components/Categories';
import Layout from '../components/Layout';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <Products productsToShow={4} />
    </Layout>
  );
};

export default Home;
