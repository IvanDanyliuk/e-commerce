import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 3px;
  height: 70vh;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ffffff;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
  border: none;
  background-color: #ffffff;
  color: #808080;
`;

const CategoryItem = ({ categoryData }) => {
  return (
    <Container>
      <Image src={categoryData.img} />
      <Info>
        <Title>{categoryData.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
