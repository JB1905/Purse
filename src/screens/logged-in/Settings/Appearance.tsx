import React from 'react';
import { ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../../components/Container';
// import ListGroup from '../../../components/ListGroup';
import Icon from '../../../components/Icon';

import { SET_THEME } from '../../../actions/themeActions';

const Appearance: React.FC = () => {
  const { colors } = useTheme();

  const appearance = useSelector((state: any) => state.theme.theme);

  const dispatch = useDispatch();

  const appearanceModes = ['Automatic', 'Dark', 'Light'];

  return (
    <Container>
      {/* <ListGroup> */}
      {appearanceModes.map((button) => (
        <ListItem
          key={button}
          title={button}
          titleStyle={{ color: colors.text }}
          onPress={() => dispatch({ type: SET_THEME, payload: button })}
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
      {/* </ListGroup> */}
    </Container>
  );
};

export default Appearance;
