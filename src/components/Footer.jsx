import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from "@mui/icons-material";
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })};
`;

const Left = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Logo = styled.h2`

`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #${props => props.color};
  color: #ffffff;
`;

const Center = styled.div`
  padding: 20px;
  flex: 1;
  ${mobile({ display: 'none' })};
`;

const Title = styled.div`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
  ${mobile({ backgroundColor: '#fff8f8' })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ESTORE.</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem blanditiis quod 
          veritatis mollitia magni suscipit fuga eum esse est, ipsum explicabo commodi, perspiciatis 
          sequi pariatur accusantium eius! Sed eaque porro incidunt minus dolorem fugit totam dolor.
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +1 234 567 89 00 
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          contact@estore.com
        </ContactItem>
        <Payment src='https://www.pngplay.com/wp-content/uploads/12/Visa-Card-Logo-No-Background-Clip-Art.png' />
      </Right>
    </Container>
  );
};

export default Footer;
