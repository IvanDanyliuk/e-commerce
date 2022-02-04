import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import Layout from '../components/Layout';

const KEY = process.env.REACT_APP_STRIPE;

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

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  font-weight: 600;
  background-color: #000000;
  color: #ffffff;
`;


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate('/success', { data: res.data });
        alert('Yo!')
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <Layout>
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
            {cart.products.map(cartItem => (
              <>
                <Product>
                  <ProductDetails>
                    <Image src={cartItem.img} />
                    <Details>
                      <ProductName><b>Product:</b> {cartItem.title}</ProductName>
                      <ProductId><b>ID:</b> {cartItem._id}</ProductId>
                      <ProductColor color={cartItem.color} />
                      <ProductSize><b>Size:</b> {cartItem.size}</ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{cartItem.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>${cartItem.price * cartItem.quantity}</ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
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
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='ESTORE.'
              image='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Layout>
  );
};

export default Cart;
