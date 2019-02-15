import React, { useState } from 'react';
import { Alert } from 'react-native';

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
      if (password.length > 5) {
        if (password === confirm) {
          register(email, password, name, surname).then(res => {
            if (res) {
              Alert.alert('User created succesfully', null, [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('SignIn')
                }
              ]);
            } else setError(res);
          });
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
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Input
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <Input
        onChangeText={setConfirm}
        placeholder="Confirm Password"
        secureTextEntry
      />

      {error && <Error>{error}</Error>}

      <Btn onPress={submit} title="Sign up" color="#fdfdfd" />
    </KeyboardContent>
  );
}
