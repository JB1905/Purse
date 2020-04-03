import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import validator from 'email-validator';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

import { resetPassword } from '../../api';

import { LoggedOutProps } from '../../types/Navigation';

type FormData = {
  email: string;
};

const ResetPassword: React.FC<LoggedOutProps<'ResetPassword'>> = ({
  navigation,
}) => {
  const [error, setError] = useState<string>(null);

  const [checking, setChecking] = useState(false);

  const { register, handleSubmit, setValue, getValues, errors } = useForm<
    FormData
  >();

  useEffect(() => {
    register('email', { required: true });
  }, [register]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     gestureEnabled: false,
  //   });
  // }, [navigation]);

  const onSubmit = async (data: FormData) => {
    const { email } = data;

    if (validator.validate(email)) {
      setChecking(true);

      setError(null);

      const res = await resetPassword(email);

      setChecking(false);

      if (res.success) {
        Alert.alert(`Message sent to: ${email}`, null, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SignIn'),
          },
        ]);
      } else {
        setError(res.message);
      }
    } else {
      setError('Incorrect email value.');
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
          Reset Password
        </Text>
      </Wrapper>

      <Wrapper>
        <Text
          h2
          h2Style={{ fontSize: 18, textAlign: 'center', marginBottom: 10 }}
        >
          Have you forgotten your password?
        </Text>
      </Wrapper>

      <Wrapper>
        <Input
          onChangeText={(text) => setValue('email', text)}
          defaultValue={getValues().email}
          placeholder="Your account email"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* {console.log(errors.email)} */}
      </Wrapper>

      {error && (
        <Wrapper>
          <Error>{error}</Error>
        </Wrapper>
      )}

      <Wrapper>
        <Button title="Send Reset Message" onPress={handleSubmit(onSubmit)} />
      </Wrapper>

      {checking && <Loader />}
    </Container>
  );
};

export default ResetPassword;
