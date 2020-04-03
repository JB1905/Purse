import React, { useState, useEffect } from 'react';
import { Switch, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Container from '../../../components/Container';
import ListGroup from '../../../components/ListGroup';

const LocalAuthentication: React.FC = () => {
  const { colors } = useTheme();

  const [value, setValue] = useState<boolean>();

  useEffect(() => {
    (async () => {
      setValue(JSON.parse(await AsyncStorage.getItem('localAuthentication')));
    })();
  }, []);

  const updateLocalAuthentication = async (status: boolean) => {
    setValue(status);

    await AsyncStorage.setItem('localAuthentication', JSON.stringify(status));
  };

  return (
    <Container>
      <ListGroup>
        <ListItem
          title="Enable Login with Biometric Sensors"
          titleProps={{
            numberOfLines: 1,
          }}
          rightAvatar={
            <Switch value={value} onValueChange={updateLocalAuthentication} />
          }
          containerStyle={{
            backgroundColor: colors.card,
            paddingVertical: 0,
            height: 50,
          }}
          titleStyle={{
            color: colors.text,
          }}
        />
      </ListGroup>
    </Container>
  );
};

export default LocalAuthentication;
