import * as Facebook from 'expo-facebook';

export const signInWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync(process.env.FACEBOOK_APP_ID);

    const {
      type,
      token,
      expirationDate,
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
};
