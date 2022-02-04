import React from 'react';
import styled from 'styled-components';
import Announcements from './Announcements';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

const Container = styled.div``;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      { children }
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Layout;
