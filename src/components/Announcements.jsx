import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  background-color: teal;
  color: #ffffff;
`;

const Announcements = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  );
};

export default Announcements;
