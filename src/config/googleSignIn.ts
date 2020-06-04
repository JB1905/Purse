import * as Google from 'expo-google-app-auth';
import Constants from 'expo-constants';

export async function signInWithGoogleAsync() {
  const { androidClientId, iosClientId } = Constants.manifest.extra.google;

  try {
    const result = await Google.logInAsync({
      androidClientId,
      iosClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}
