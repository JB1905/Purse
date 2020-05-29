import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import StatusBar from '../../components/StatusBar';
import { Box } from '../../components/Box';
import { ErrorMessage } from '../../components/ErrorMessage';

import { useAuth } from '../../hooks/useAuth';

import type { LoggedOutProps } from '../../types/Navigation';

type FormData = {
  email: string;
};

const ResetPassword: React.FC<LoggedOutProps<'ResetPassword'>> = ({
  navigation,
}) => {
  const { resetPassword } = useAuth();

  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, getValues, errors } = useForm<
    FormData
  >();

  useEffect(() => {
    register('email', { required: true });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    const { email } = data;

    setLoading(true);

    try {
      if (error) setError(null);

      await resetPassword(email);

      Alert.alert(`Message sent to: ${email}`, null, [
        {
          text: 'OK',
          onPress: navigation.goBack,
        },
      ]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container full spaces keyboard>
      <StatusBar isModal />

      <View>
        <Box>
          <Text h2>Reset Password</Text>

          <Text h3>Have you forgotten your password?</Text>
        </Box>

        <Box>
          <Input
            onChangeText={(text) => setValue('email', text)}
            defaultValue={getValues().email}
            placeholder="Your account email"
            autoCapitalize="none"
            keyboardType="email-address"
            error={errors.email}
          />

          {loading && <Loader />}

          {error?.message && <ErrorMessage message={error.message} />}

          <Button title="Send Reset Message" onPress={handleSubmit(onSubmit)} />
        </Box>
      </View>
    </Container>
  );
};

export default ResetPassword;
