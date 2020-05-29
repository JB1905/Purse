import React from 'react';
import { StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Icon from './Icon';

interface Props extends ButtonProps {
  readonly iconName?: string;
  readonly filled?: boolean;
  readonly spaces?: boolean;
}

const HeaderButton: React.FC<Props> = ({
  title,
  iconName,
  filled,
  style,
  // ref,
  buttonStyle,
  containerStyle,
  spaces = false,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      title={Platform.OS === 'ios' && title ? title : ''}
      titleStyle={{ color: colors.primary, fontSize: 18 }}
      // background={TouchableNativeFeedback.Ripple(colors.background)}
      containerStyle={StyleSheet.flatten([
        // { overflow: 'hidden' },
        containerStyle,
      ])}
      disabledStyle={{ backgroundColor: 'transparent' }}
      buttonStyle={StyleSheet.flatten([
        {
          backgroundColor: filled ? colors.primary : 'transparent',
          borderRadius: 20,
        },
        Platform.OS === 'ios' && { paddingHorizontal: 0 },
        buttonStyle,
      ])}
      icon={
        (Platform.OS !== 'ios' || (iconName && !title)) && (
          <Icon name={iconName} color={filled ? '#fff' : colors.primary} />
        )
      }
    />
  );
};

export default HeaderButton;
