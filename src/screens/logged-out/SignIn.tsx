import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
// import * as AppleAuthentication from 'expo-apple-authentication';
import { useTheme } from '@react-navigation/native';
// import { useColorScheme } from 'react-native-appearance';
import { useForm } from 'react-hook-form';
import validator from 'email-validator';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Icon from '../../components/Icon';

import { AuthContext } from '../../providers/AuthProvider';

import { login } from '../../api';

import { onSignIn } from '../../helpers/auth';
import { useLocalAuth } from '../../hooks/useLocalAuth';

// import { appleAuth } from '../../config/appleAuth';

import { LoggedOutProps } from '../../types/Navigation';

type FormData = {
  email: string;
  password: string;
};

const SignIn: React.FC<LoggedOutProps<'SignIn'>> = ({ navigation }) => {
  const { colors } = useTheme();

  // const colorScheme = useColorScheme();

  const { setIsAuth } = useContext(AuthContext);

  const { localAuth, authenticateLocally } = useLocalAuth();

  const [error, setError] = useState<string>(null);
  const [checking, setChecking] = useState(false);

  const [securePassword, setSecurePassword] = useState(true);

  const { register, handleSubmit, setValue, getValues } = useForm<FormData>();

  useEffect(() => {
    register('email', { required: true });
    register('password', { required: true });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    if (validator.validate(email)) {
      setChecking(true);

      setError(null);

      const res = await login(email, password);

      setChecking(false);

      if (res.user) {
        onSignIn(res.user);

        setIsAuth(true);
      } else {
        setError(res.message);
      }
    } else {
      setError('Incorrect email value.');
    }
  };

  return (
    <>
      <Container
        keyboard
        full
        spaces
        style={{ maxWidth: 500, alignSelf: 'center', width: '100%' }}
      >
        <Wrapper>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../../assets/icon.png')}
              containerStyle={{ width: 80, height: 80, marginRight: 5 }}
            />

            <Text h1 h1Style={{ fontWeight: '700', textAlign: 'center' }}>
              Purse
            </Text>
          </View>
        </Wrapper>

        <Wrapper>
          <Text
            h2
            h2Style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}
          >
            Your personal finance assistant
          </Text>
        </Wrapper>

        {/* TODO Google Auth */}
        {/* TODO Facebook Auth */}

        {/* {AppleAuthentication.isAvailableAsync() && (
          <Wrapper>
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={
                AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
              }
              buttonStyle={
                AppleAuthentication.AppleAuthenticationButtonStyle[
                  colorScheme === 'dark' ? 'WHITE' : 'BLACK'
                ]
              }
              cornerRadius={10}
              style={{ width: 260, height: 44, alignSelf: 'center' }}
              onPress={appleAuth}
            />
          </Wrapper>
        )} */}

        <Wrapper>
          <Input
            onChangeText={(text) => setValue('email', text)}
            defaultValue={getValues().email}
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Wrapper>

        <Wrapper>
          <Input
            onChangeText={(text) => setValue('password', text)}
            defaultValue={getValues().password}
            placeholder="Password"
            secureTextEntry={securePassword}
            rightIcon={
              <TouchableOpacity
                onPress={() => setSecurePassword(!securePassword)}
              >
                <Icon
                  name={securePassword ? 'visibility' : 'visibility-off'}
                  containerStyle={{ marginTop: 3, opacity: 0.75 }}
                  color={colors.text}
                  size={26}
                />
              </TouchableOpacity>
            }
          />
        </Wrapper>

        {error && (
          <Wrapper>
            <Error>{error}</Error>
          </Wrapper>
        )}

        <Wrapper>
          <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
        </Wrapper>

        <Wrapper>
          {localAuth && (
            <Button
              title="Use local auth"
              onPress={authenticateLocally}
              type="clear"
            />
          )}

          <Button
            title="Reset Password"
            onPress={() => navigation.navigate('ResetPassword')}
            type="clear"
          />

          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            type="clear"
          />
        </Wrapper>
      </Container>

      {checking && <Loader />}
    </>
  );
};

export default SignIn;
