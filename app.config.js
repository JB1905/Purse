export default {
  expo: {
    name: 'Purse',
    description: 'React Native expenses assistant',
    slug: 'Purse',
    privacy: 'public',
    platforms: ['ios', 'android', 'web'],
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      buildNumber: '1.0.0',
      userInterfaceStyle: 'automatic',
      bundleIdentifier: 'com.jbiesiada.purse',
      supportsTablet: true,
      config: {
        googleSignIn: {
          reservedClientId:
            'com.googleusercontent.apps.175864534731-gm9q72stomn95rqjn6naiv2sluk7d4q5',
        },
      },
    },
    android: {
      versionCode: 1,
      package: 'com.jbiesiada.purse',
      permissions: ['CAMERA'],
      config: {
        googleMaps: {
          apiKey: 'AIzaSyC4qoDGm8Ra6Mskf0uhCsferVNsdJOpOTk',
        },
      },
    },
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'jbiesiada',
            project: 'Purse',
            authToken: 'e5dc81c82ef611eabe9c4201c0a8d03a',
          },
        },
      ],
    },
    extra: {
      sentry: {
        dsn: 'https://5fc85efd5b174e9f8f987f9546c75e3e@sentry.io/1871651',
      },
      firebase: {
        apiKey: 'AIzaSyBdfLxIUU31KAFOtrog8UHs0GvGOmaYw18',
        authDomain: 'purse-a1e17.firebaseapp.com',
        databaseURL: 'https://purse-a1e17.firebaseio.com',
        projectId: 'purse-a1e17',
        storageBucket: 'purse-a1e17.appspot.com',
        messagingSenderId: '175864534731',
      },
      google: {
        androidClientId:
          '175864534731-phfsut7tnpdakm7lsfafh1b461tev0u9.apps.googleusercontent.com',
        iosClientId:
          '175864534731-gm9q72stomn95rqjn6naiv2sluk7d4q5.apps.googleusercontent.com',
      },
      facebook: {
        appId: '257571148976095',
      },
    },
  },
};
