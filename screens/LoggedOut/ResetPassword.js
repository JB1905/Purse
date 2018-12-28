import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Loader } from '../../components/Loader';
import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { resetPassword } from '../../api';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [checking, setChecking] = useState(false);

  const send = () => {
    if (email) {
      setChecking(true);

      resetPassword(email).then(res => {
        setChecking(false);

        if (res === true) {
          Alert.alert(`Message sent to: ${email}`, null, [
            {
              text: 'OK',
              onPress: () => navigation.navigate('SignIn')
            }
          ]);
        } else setError(res);
      });
    } else setError('Email is required.');
  };

  return (
    <KeyboardContent>
      <Title>Have you forgotten your password?</Title>

      <Input
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Your account email"
      />

      {error && <Error>{error}</Error>}

      <Btn onPress={send} title="Send reset message" color="#fdfdfd" />

      {checking && <Loader />}
    </KeyboardContent>
  );
}
