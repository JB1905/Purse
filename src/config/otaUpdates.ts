import { Alert } from 'react-native';
import { Updates } from 'expo';

export const otaUpdates = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();

      Alert.alert('Update is available', 'Do you want to install it?', [
        {
          text: 'Later',
          style: 'cancel',
        },
        {
          text: 'Install',
          style: 'destructive',
          onPress: Updates.reloadFromCache,
        },
      ]);
    }
  } catch (err) {
    console.log(err);
  }
};
