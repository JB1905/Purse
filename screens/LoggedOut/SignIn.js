import React, { useState } from 'react';
import { Button } from 'react-native';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Error } from '../../components/Error';
import { Btn } from '../../components/Button';
import { Wrap } from '../../components/Wrap';
import { Loader } from '../../components/Loader';

import { login } from '../../api';
import { onSignIn } from '../../auth';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [checking, setChecking] = useState(false);

  const submit = () => {
    if (email && password) {
      setChecking(true);

      login(email, password).then(res => {
        if (res.user) {
          onSignIn(res.user).then(() => {
            navigation.navigate('Finances');
          });
        } else {
          setChecking(false);
          setError(res.message);
        }
      });
    } else {
      setError('Email and password are required.');
    }
  };

  return (
    <KeyboardContent>
      <Title main>Purse</Title>

      <Title>Your personal expenses assistant. Right here!</Title>

      <Input
        placeholder="E-mail"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />

      {error && <Error>{error}</Error>}

      <Btn title="Sign in" color="#fdfdfd" onPress={submit} />

      <Wrap>
        <Button
          title="Reset password"
          color="#5ac59a"
          onPress={() => navigation.navigate('Reset')}
        />

        <Button
          title="Sign up"
          color="#5ac59a"
          onPress={() => navigation.navigate('SignUp')}
        />
      </Wrap>

      {checking && <Loader />}
    </KeyboardContent>
  );
}
