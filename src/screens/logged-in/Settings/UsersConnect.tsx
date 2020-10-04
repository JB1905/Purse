import React from 'react';

import Container from '../../../components/Container';
import FallbackScreen from '../../../components/FallbackScreen';

const UsersConnect = () => {
  return (
    <Container>
      <FallbackScreen
        title="This screen is not available"
        message="It will be added in the next version"
      />
    </Container>
  );
};

export default UsersConnect;
