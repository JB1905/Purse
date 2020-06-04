import { Platform } from 'react-native';

export const theme = {
  Button: {
    buttonStyle: {
      borderRadius: Platform.select({
        ios: 10,
      }),
    },
  },
  Text: {
    h1Style: {
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 4,
    },
    h2Style: {
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 4,
    },
    h3Style: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 2,
    },
  },
};
