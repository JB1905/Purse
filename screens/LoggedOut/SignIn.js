import React, { useState } from 'react';
import { Button, View } from 'react-native';

import { Loader } from '../../components/Loader';
import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { onSignIn } from '../../auth';
import { login } from '../../api';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [checking, setChecking] = useState(false);

  const submit = () => {
    if (email && password) {
      setChecking(true);

      login(email, password).then(res => {
        if (res.verify) {
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
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="E-mail"
      />

      <Input
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
      />

      {error && <Error>{error}</Error>}

      <Btn action={submit} title="Sign in" color="#fdfdfd" />

      <View style={{ marginTop: 10 }}>
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
      </View>

      {checking && <Loader />}
    </KeyboardContent>
  );
}
