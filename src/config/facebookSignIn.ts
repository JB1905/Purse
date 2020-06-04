import * as Facebook from 'expo-facebook';
import Constants from 'expo-constants';

export async function signInWithFacebookAsync() {
  try {
    await Facebook.initializeAsync(Constants.manifest.extra.facebook.appId);

    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );

      return token;
    } else {
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
