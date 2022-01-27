import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(category => (
        <CategoryItem key={category.id} categoryData={category} />
      ))}
    </Container>
  );
};

export default Categories;
