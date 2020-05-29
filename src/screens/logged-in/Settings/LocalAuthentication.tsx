import React from 'react';
import { Switch } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Container from '../../../components/Container';
// import ListGroup from '../../../components/ListGroup';

const LocalAuthentication: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      {/* <ListGroup> */}
      <ListItem
        title="Enable Login with Biometric Sensors"
        titleStyle={{ color: colors.text }}
        titleProps={{ numberOfLines: 1 }}
        rightAvatar={
          <Switch
          // value={value}
          // onValueChange={updateLocalAuthentication}
          />
        }
        containerStyle={{
          backgroundColor: colors.card,
          paddingVertical: 0,
          height: 50,
        }}
      />
      {/* </ListGroup> */}
    </Container>
  );
};

export default LocalAuthentication;
