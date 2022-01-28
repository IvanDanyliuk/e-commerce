import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })};
`;

const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
  cursor: pointer;
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })};
`;

const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`;

const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.div`
  margin: 5px;
  font-size: 24px;
  ${mobile({ margin: '5px 15px' })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })};
`;

const Hr = styled.hr`
  height: 1px;
  background-color: #eeeeee;
  border: none;
`;

const Summary = styled.div`
  padding: 20px;
  height: 50vh;
  flex: 1;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;

const SummaryTitle = styled.h3`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.type === 'total' && '24px'};
  font-weight: ${props => props.type === 'total' && '500'};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  font-weight: 600;
  background-color: #000000;
  color: #ffffff;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src='https://img01.ztat.net/article/spp-media-p1/0f8eed150c714c20b95248107108629d/2d8335b60c064e81aef77fb6a3295982.jpg?imwidth=1800' />
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER JEANS</ProductName>
                  <ProductId><b>ID:</b> 456456456456</ProductId>
                  <ProductColor color='lightblue' />
                  <ProductSize><b>Size:</b> 36</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$50</ProductPrice>
              </PriceDetails>
            </Product>

            <Hr />

            <Product>
              <ProductDetails>
                <Image src='https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format' />
                <Details>
                  <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                  <ProductId><b>ID:</b> 5452344345345</ProductId>
                  <ProductColor color='darkblue' />
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
