import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';

Sentry.init({
  dsn: Constants.manifest.extra.sentry.dsn,
  enableInExpoDevelopment: true,
  debug: true,
});
