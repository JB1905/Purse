import React, { useState } from 'react';
import { Alert } from 'react-native';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Error } from '../../components/Error';
import { Btn } from '../../components/Button';

import { register } from '../../api';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);

  const submit = () => {
    const alert = () => {
      Alert.alert('User created succesfully', null, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('SignIn')
        }
      ]);
    };

    if (name && surname && email && password && confirm) {
      if (password.length > 5) {
        if (password === confirm) {
          register(email, password, name, surname).then(res => {
            if (res.success) alert();
            else setError(res.message);
          });
        } else {
          setError('Password and confirmed password are different.');
        }
      } else {
        setError('Password is too short (at least 6 char.).');
      }
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <KeyboardContent>
      <Title>Save your money. Start today!</Title>

      <Input placeholder="Name" onChangeText={setName} />

      <Input placeholder="Surname" onChangeText={setSurname} />

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

      <Input
        placeholder="Confirm Password"
        onChangeText={setConfirm}
        secureTextEntry
      />

      {error && <Error>{error}</Error>}

      <Btn title="Sign up" color="#fdfdfd" onPress={submit} />
    </KeyboardContent>
  );
}
