import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 3;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ffffff;
`;

const Image = styled.img`
  width: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  margin: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ productData }) => {
  return (
    <Container>
      <Circle />
      <Image src={productData.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${productData._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
