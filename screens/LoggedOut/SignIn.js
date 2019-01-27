import React, { useState } from 'react';
import { Button } from 'react-native';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';
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
        if (res.verification) {
          onSignIn(res.data).then(() => navigation.navigate('Expenses'));
        } else {
          setError(res);
          setChecking(false);
        }
      });
    } else setError('Email and password are required.');
  };

  return (
    <KeyboardContent>
      <Title main>Purse</Title>
      <Title>Your personal expenses assistant. Right here!</Title>

      <Input
        onChangeText={setEmail}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      {error && <Error>{error}</Error>}

      <Btn onPress={submit} title="Sign in" color="#fdfdfd" />

      <Wrap>
        <Button
          onPress={() => navigation.navigate('Reset')}
          title="Reset password"
          color="#5ac59a"
        />

        <Button
          onPress={() => navigation.navigate('SignUp')}
          title="Sign up"
          color="#5ac59a"
        />
      </Wrap>

      {checking && <Loader />}
    </KeyboardContent>
  );
}
