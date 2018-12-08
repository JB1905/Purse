import React, { useState } from 'react';

import { KeyboardContent, Content } from '../../components/Content';
import { SubTitle } from '../../components/SubTitle';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';
import { Error } from '../../components/Error';

import { signUp } from '../../api';

export default function SignUp({ props }) {
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
          signUp(email, password, name, surname).then(res => 
            res ? props.navigation.navigate('SignIn') : setError(res)
          );
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
      <Content keyboard>
        <SubTitle value="Save Your money. Start today!" />

        <Input action={setName} placeholder="Name" />
        <Input action={setSurname} placeholder="Surname" />
        <Input
          action={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-mail"
        />
        <Input action={setPassword} secure placeholder="Password" />

        <Input action={setConfirm} secure placeholder="Confirm Password" />

        {error && <Error message={error} />}

        <Btn action={submit} title="Sign up" color="#fdfdfd" />
      </Content>
    </KeyboardContent>
  );
}
