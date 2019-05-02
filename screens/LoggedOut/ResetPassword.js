import React, { useState } from 'react';
import { Alert } from 'react-native';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';

import { resetPassword } from '../../api';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [checking, setChecking] = useState(false);

  const send = () => {
    const alert = email => {
      Alert.alert(`Message sent to: ${email}`, null, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SignIn')
        }
      ]);
    };

    if (email) {
      setChecking(true);

      resetPassword(email).then(res => {
        setChecking(false);

        if (res.success) {
          alert(email);
        } else {
          setError(res);
        }
      });
    } else {
      setError('Email is required.');
    }
  };

  return (
    <KeyboardContent>
      <Title>Have you forgotten your password?</Title>

      <Input
        placeholder="Your account email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {error && <Error>{error}</Error>}

      <Btn title="Send reset message" color="#fdfdfd" onPress={send} />

      {checking && <Loader />}
    </KeyboardContent>
  );
}
