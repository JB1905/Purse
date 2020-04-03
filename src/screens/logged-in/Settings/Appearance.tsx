import React, { useContext } from 'react';
import { ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Container from '../../../components/Container';
import ListGroup from '../../../components/ListGroup';
import Icon from '../../../components/Icon';

import { SettingsContext } from '../../../providers/SettingsProvider';

const Appearance: React.FC = () => {
  const { colors } = useTheme();

  const { appearance, updateAppearanceMode } = useContext(SettingsContext);

  const appearanceModes = ['Automatic', 'Dark', 'Light'];

  return (
    <Container>
      <ListGroup>
        {appearanceModes.map((button, index) => (
          <ListItem
            title={button}
            titleStyle={{
              color: colors.text,
            }}
            bottomDivider={index + 1 !== appearanceModes.length}
            onPress={() => updateAppearanceMode(button)}
            containerStyle={{
              backgroundColor: colors.card,
              borderColor: colors.border,
              paddingVertical: 0,
              height: 50,
            }}
            rightIcon={
              button === appearance && (
                <Icon name="checkmark" color={colors.primary} size={30} />
              )
            }
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Appearance;
