import React, { useState, useEffect } from 'react';
import { Image } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

import Container from '../../components/Container';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Loader from '../../components/Loader';
import Box from '../../components/Box';
import ErrorMessage from '../../components/ErrorMessage';

import { useAuth } from '../../hooks/useAuth';

import type { LoggedOutProps } from '../../types/Navigation';

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC<LoggedOutProps<'SignIn'>> = ({ navigation }) => {
  const { colors } = useTheme();

  const { login, facebookSignIn, googleSignIn } = useAuth();

  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  const [securePassword, setSecurePassword] = useState(true);

  const { register, handleSubmit, setValue, watch, errors } = useForm<
    FormData
  >();

  useEffect(() => {
    register('email', { required: true });
    register('password', { required: true });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    setLoading(true);

    try {
      if (error) setError(null);

      await login({ email, password });
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return (
    <Container full spaces keyboard>
      <Box spaces={20}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <Image
            source={require('../../../assets/icon.png')}
            containerStyle={{ width: 80, height: 80, marginRight: 5 }}
          />

          <Text h1>Purse</Text>
        </View>

        <Text h3>Your personal finance assistant</Text>
      </Box>

      {/* <Box>
        <Button title="Google" onPress={googleSignIn} />
        <Button title="Facebook" onPress={facebookSignIn} />
      </Box> */}

      <Box>
        <Input
          onChangeText={(text) => setValue('email', text)}
          defaultValue={watch().email}
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          error={errors.email}
        />

        <Input
          onChangeText={(text) => setValue('password', text)}
          defaultValue={watch().password}
          placeholder="Password"
          secureTextEntry={securePassword}
          error={errors.password}
          rightIcon={
            <TouchableOpacity
              onPress={() => setSecurePassword(!securePassword)}
            >
              <Icon
                name={securePassword ? 'visibility' : 'visibility-off'}
                containerStyle={{ opacity: 0.75 }}
                color={colors.text}
                size={26}
              />
            </TouchableOpacity>
          }
        />

        {error?.message && <ErrorMessage message={error.message} />}

        <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
      </Box>

      <Box>
        <Button
          title="Forgot Password?"
          onPress={() => navigation.navigate('ResetPassword')}
          type="clear"
        />

        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          type="clear"
        />
      </Box>

      {loading && <Loader />}
    </Container>
  );
};

export default SignIn;
