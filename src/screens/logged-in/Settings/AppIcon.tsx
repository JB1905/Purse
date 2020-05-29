import React from 'react';

import Container from '../../../components/Container';
import FallbackScreen from '../../../components/FallbackScreen';

const AppIcon: React.FC = () => {
  // const appIcons = [];

  return (
    <Container>
      <FallbackScreen
        title="This screen is not available"
        message="It will be added in the next version"
      />

      {/* {appIcons.map((icon) => null)} */}
    </Container>
  );
};

export default AppIcon;
