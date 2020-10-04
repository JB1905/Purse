import { LogBox } from 'react-native';

const errors = [
  'Warning: Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://fb.me/react-unsafe-component-lifecycles for details.',
  'Warning: Legacy context API has been detected within a strict-mode tree.',
]

LogBox.ignoreLogs(errors);
