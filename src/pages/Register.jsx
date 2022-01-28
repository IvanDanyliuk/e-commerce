import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260') no-repeat center;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #ffffff;
  ${mobile({ width: '75%' })};
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  margin: 20px 10px 0px 0px;
  padding: 10px;
  min-width: 40%;
  flex: 1;
`;

const Agreement = styled.span`
  margin: 20px 0px;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 40%;
  border: none;
  background-color: #008080;
  color: #ffffff;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='first name' />
          <Input placeholder='last name' />
          <Input placeholder='user name' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my 
            personal data in accordance with the <b>PRIVACY POLICE</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
