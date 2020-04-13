import React, { useState, useContext, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import validator from 'email-validator';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import { AuthContext } from '../../providers/AuthProvider';

import { createAccount } from '../../api';

import { onSignIn } from '../../helpers/auth';

type FormData = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm: string;
};

const SignUp: React.FC = () => {
  const { setIsAuth } = useContext(AuthContext);

  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string>(null);

  const { register, handleSubmit, setValue, getValues, errors } = useForm<
    FormData
  >();

  useEffect(() => {
    register('name', { required: true });
    register('surname', { required: true });
    register('email', { required: true });
    register('password', { required: true });
    register('confirm', { required: true });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    const { name, surname, email, password, confirm } = data;
    if (password.length > 5) {
      if (password === confirm) {
        setChecking(true);

        setError(null);

        const res = await createAccount(email, password, name, surname);

        setChecking(false);

        if (res.user) {
          Alert.alert('User created succesfully', null, [
            {
              text: 'OK',
              onPress: () => {
                onSignIn(res.user);

                // navigation.goBack(); TODO

                setTimeout(() => {
                  setIsAuth(true);
                }, 500);
              },
            },
          ]);
        } else {
          setError(res.message);
        }
      } else {
        setError('Password and confirmed password are different.');
      }
    } else {
      setError('Password is too short (at least 6 char.).');
    }
  };

  return (
    <Container keyboard full spaces>
      <StatusBar translucent barStyle="light-content" />

      <Wrapper>
        <Text
          h2
          h2Style={{ fontSize: 30, fontWeight: '700', textAlign: 'center' }}
        >
          Sign Up
        </Text>
      </Wrapper>

      <Wrapper>
        <Text
          h2
          h2Style={{ fontSize: 18, textAlign: 'center', marginBottom: 10 }}
        >
          Save your money. Start today!
        </Text>
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('name', text)}
          defaultValue={getValues().name}
          placeholder="Name"
          error={errors.name}
        />
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('surname', text)}
          defaultValue={getValues().surname}
          placeholder="Surname"
          error={errors.surname}
        />
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('email', text)}
          defaultValue={getValues().email}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          error={errors.email}
        />
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('password', text)}
          defaultValue={getValues().password}
          placeholder="Password"
          secureTextEntry
          error={errors.password}
        />
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('confirm', text)}
          defaultValue={getValues().confirm}
          placeholder="Confirm Password"
          secureTextEntry
          error={errors.confirm}
        />
      </Wrapper>

      {error && (
        <Wrapper>
          <Error>{error}</Error>
        </Wrapper>
      )}

      <Wrapper>
        <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      </Wrapper>

      {checking && <Loader />}
    </Container>
  );
};

export default SignUp;
