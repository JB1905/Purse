import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
  readonly title?: string;
}

const SectionBox: React.FC<Props> = ({
  title,
  // headerActions,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={
        {
          // marginVertical: 6
        }
      }
    >
      {title && (
        <Text
          style={{
            textTransform: 'uppercase',
            fontWeight: '500',
            fontSize: 14,
            color: colors.text,
            opacity: 0.5,
            // marginVertical: 6,
            marginHorizontal: 20,
          }}
        >
          {title}
        </Text>
      )}

      <View
        style={{
          overflow: 'hidden',
          backgroundColor: colors.card,
          height: 370,
        }}
      >
        {children}
      </View>
    </View>
  );
};

// TODO StyleSheet
// const styles = StyleSheet.create({});

export default SectionBox;
