import styled from 'styled-components';
import { Send } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 70px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  ${mobile({ width: '80%' })};
`;

const Input = styled.input`
  padding-left: 20px;
  flex: 8;
  border: none;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #008080;
  color: #ffffff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
