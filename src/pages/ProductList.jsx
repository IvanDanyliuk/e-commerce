import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Title = styled.h2`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ 
    margin: '0px 20px',
    display: 'flex',
    flexDirection: 'column'
  })};
`;

const FilterText = styled.span`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: '0px' })};
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({ margin: '10px 0px' })};
`;

const Option = styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const [colors, setColors] = useState([]);

  const callback = useCallback((data) => {
    setColors(data);
  }, []);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    setFilters({});
  }, [category]);

  console.log(category, filters, sort)

  return (
    <Layout>
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='categories' onClick={handleFilters}>
            <Option disabled>Size</Option>
            <Option>tshirts</Option>
            <Option>pants</Option>
            <Option>jeans</Option>
            <Option>hoodie</Option>
            <Option>shoes</Option>
          </Select>
          <Select name='color' onClick={handleFilters}>
            <Option disabled>Color</Option>
            {colors.map(color => (
              <Option key={color}>{color}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products 
        category={category} 
        filters={filters} 
        sort={sort} 
        getColors={callback}
      />
    </Layout>
  );
};

export default ProductList;
