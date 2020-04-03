import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import Container from '../../../components/Container';

const PaymentMethods: React.FC = () => {
  const methods = {
    cash: 'Cash',
    credit: 'Credit Card',
    debit: 'Debit Card',
    check: 'Check',
  };

  return (
    <Container>
      {Object.entries(methods).map(([key, name]) => (
        <Text key={key}>{name}</Text>
      ))}
    </Container>
  );
};

export default PaymentMethods;
