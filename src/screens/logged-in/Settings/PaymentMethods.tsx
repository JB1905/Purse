import React from 'react';

import Container from '../../../components/Container';
import FallbackScreen from '../../../components/FallbackScreen';

const PaymentMethods: React.FC = () => {
  // const methods = {
  // cash: 'Cash',
  // credit: 'Credit Card',
  // debit: 'Debit Card',
  // check: 'Check',
  // };

  return (
    <Container>
      <FallbackScreen
        title="This screen is not available"
        message="It will be added in the next version"
      />

      {/* {Object.entries(methods).map(([key, name]) => (
        <Text key={key}>{name}</Text>
      ))} */}
    </Container>
  );
};

export default PaymentMethods;
