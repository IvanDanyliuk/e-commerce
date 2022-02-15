import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { userRequest } from '../../requestMethods';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const InfoContainer = styled.div``;
const Title = styled.h6`
  font-size: 14px;
`;
const InfoItem = styled.span`

`;

const Arrow = styled.span`
  color: ${props => props.trend === 'negative' ? 'red' : 'green'};
`;

const DasboardInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income');
        console.log(res)
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {
        console.log(error)
      }
    };
    getIncome();
  }, []);

  console.log(income)

  return (
    <InfoContainer>
      <Title>Income Dynamic</Title>
      <InfoItem>{income[1]?.total}%</InfoItem>
      <InfoItem>
        {Math.floor(percentage) 
          ? (<Arrow trend='negative'><ArrowDownwardIcon /></Arrow>) 
          : (<Arrow trend='positive'><ArrowUpwardIcon /></Arrow>)}
      </InfoItem>
    </InfoContainer>
  );
};

export default DasboardInfo;
