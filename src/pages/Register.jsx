import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
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
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

  const handleRegisterClick = e => {
    e.preventDefault();
    if(inputs.password && inputs.confirmPassword && inputs.password === inputs.confirmPassword) {
      const {confirmPassword, ...userData} = inputs;
      register(userData, dispatch);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input name='firstName' type='text' placeholder='first name' onChange={handleInputChange} />
          <Input name='lastName' type='text' placeholder='last name' onChange={handleInputChange} />
          <Input name='username' type='text' placeholder='user name' onChange={handleInputChange} />
          <Input name='email' type='text' placeholder='email' onChange={handleInputChange} />
          <Input name='password' type='password' placeholder='password' onChange={handleInputChange} />
          <Input name='confirmPassword' type='password' placeholder='confirm password' onChange={handleInputChange} />
          <Agreement>
            By creating an account, I consent to the processing of my 
            personal data in accordance with the <b>PRIVACY POLICE</b>
          </Agreement>
          <Button onClick={handleRegisterClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
