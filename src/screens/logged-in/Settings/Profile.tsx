import React, { useState, useEffect, useContext } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import gravatar from 'gravatar';

import Container from '../../../components/Container';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader';
import Wrapper from '../../../components/Wrapper';
import ListGroup from '../../../components/ListGroup';
import ListGroupItem from '../../../components/ListGroupItem';
import Icon from '../../../components/Icon';
// import Error from "../../../components/Error";

import { onSignOut } from '../../../helpers/auth';

import { useLocalAuth } from '../../../hooks/useLocalAuth';

import { getCurrentUser, getUserData } from '../../../api';

import { AuthContext } from '../../../providers/AuthProvider';

const Profile: React.FC<any> = ({ navigation }) => {
  const { colors } = useTheme();

  const { setIsAuth } = useContext(AuthContext);

  const [data, setData] = useState<firebase.firestore.DocumentData>(null);
  const [error, setError] = useState<string>(null);

  const { localAuth } = useLocalAuth();

  useEffect(() => {
    getUserData(getCurrentUser()?.uid)
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, []);

  const signOut = () => {
    onSignOut();

    navigation.goBack();

    setTimeout(() => {
      setIsAuth(false);
    }, 500);
  };

  // TODO change password

  return (
    <Container scrollEnabled spaces={false}>
      <Wrapper
        style={{
          marginTop: 15,
          marginBottom: 15,
          overflow: 'hidden',
          borderRadius: 10,
          marginHorizontal: 16,
          position: 'relative',
          height: 103,
        }}
      >
        {data ? (
          <ListItem
            leftAvatar={
              <Avatar
                title={`${data?.name[0] ?? ''}${data?.surname[0] ?? ''}`}
                source={{
                  uri: gravatar.url(`${data.email}`, { protocol: 'https' }),
                }}
                size="large"
                rounded
              />
            }
            rightIcon={
              <Icon name="arrow-forward" color={colors.border} size={18} />
            }
            onPress={() => navigation.navigate('User')}
            containerStyle={{
              backgroundColor: colors.card,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.01,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            title={`${data.name} ${data.surname}`}
            titleStyle={{
              marginVertical: 3,
              color: colors.text,
              fontWeight: '500',
              fontSize: 22,
            }}
            subtitle={data.email}
            subtitleStyle={{
              marginVertical: 3,
              color: colors.text,
              opacity: 0.5,
            }}
          />
        ) : (
          <Loader size="small" />
        )}
      </Wrapper>

      {/* <ListGroup> */}
      {/* <ListGroupItem
          title="Shared Data"
          bottomDivider
          onPress={() => navigation.navigate('UsersConnect')}
        /> */}

      {/* <ListGroupItem
          title="Payment Methods"
          // bottomDivider
          onPress={() => navigation.navigate('PaymentMethods')}
        /> */}

      {/* <ListGroupItem
          title="Connect with Bank Account"
          onPress={() => navigation.navigate('BanksConnect')}
        /> */}
      {/* </ListGroup> */}

      <ListGroup>
        {localAuth && (
          <ListGroupItem
            title="Local Authentication"
            bottomDivider
            onPress={() => navigation.navigate('LocalAuthentication')}
          />
        )}

        {/* <ListGroupItem
          title="App Icon"
          bottomDivider
          onPress={() => navigation.navigate('AppIcon')}
        /> */}

        <ListGroupItem
          title="Appearance"
          bottomDivider
          onPress={() => navigation.navigate('Appearance')}
        />

        <ListGroupItem
          title="Bottom Tabs"
          onPress={() => navigation.navigate('BottomNavItems')}
        />
      </ListGroup>

      <Wrapper
        style={{
          marginTop: 15,
          marginBottom: 15,
          marginHorizontal: 16,
        }}
      >
        <Button title="Sign Out" onPress={signOut} />
      </Wrapper>
    </Container>
  );
};

export default Profile;
