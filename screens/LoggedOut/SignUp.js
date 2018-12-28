import React, { useState } from 'react';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { register } from '../../api';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);

  const submit = () => {
    if (name && surname && email && password && confirm) {
      if (password.length > 6) {
        if (password === confirm) {
          register(email, password, name, surname).then(res =>
            res ? navigation.navigate('SignIn') : setError(res)
          );
        } else setError('Password and confirmed password are different.');
      } else setError('Password is too short (at least 6 char.).');
    } else setError('All fields are required.');
  };

  return (
    <KeyboardContent>
      <Title>Save your money. Start today!</Title>

      <Input onChangeText={setName} placeholder="Name" />

      <Input onChangeText={setSurname} placeholder="Surname" />

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

      <Input
        onChangeText={setConfirm}
        secureTextEntry
        placeholder="Confirm Password"
      />

      {error && <Error>{error}</Error>}

      <Btn onPress={submit} title="Sign up" color="#fdfdfd" />
    </KeyboardContent>
  );
}
