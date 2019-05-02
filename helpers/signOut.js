import { onSignOut } from '../auth';
import { Alert } from 'react-native';

export const signOut = () => {
  return new Promise(resolve => {
    Alert.alert('Do you want to sign out?', null, [
      {
        text: 'Sign out',
        onPress: () => onSignOut().then(() => resolve())
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ]);
  });
};
