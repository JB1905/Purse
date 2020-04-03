import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

import Icon from './Icon';

const HeaderButton: React.FC<
  ButtonProps & {
    iconName: string;
    filled?: boolean;
    spaces?: boolean;
  }
> = ({
  title,
  iconName,
  filled,
  style,
  buttonStyle,
  containerStyle,
  spaces = false,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      title={Platform.OS === 'ios' ? title : ''}
      titleStyle={{ color: colors.primary, fontSize: 18 }}
      style={StyleSheet.flatten([spaces && { marginHorizontal: 14 }, style])}
      containerStyle={StyleSheet.flatten([
        { overflow: 'hidden' },
        containerStyle,
      ])}
      buttonStyle={StyleSheet.flatten([
        {
          backgroundColor: filled ? colors.primary : 'transparent',
          borderRadius: 20,
        },
        buttonStyle,
      ])}
      icon={
        Platform.OS !== 'ios' && (
          <Icon name={iconName} color={filled ? '#fff' : colors.primary} />
        )
      }
    />
  );
};

export default HeaderButton;
