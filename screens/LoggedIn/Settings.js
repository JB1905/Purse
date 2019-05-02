import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { FirestoreDocument } from 'react-firestore';

import { Content } from '../../components/Content';
import { Loader } from '../../components/Loader';
import { UserCard } from '../../components/Cards';
import { Btn } from '../../components/Button';

import { signOut } from '../../helpers/signOut';
import { getUser } from '../../helpers/getUser';

export default function Settings({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  return (
    <FirestoreDocument
      path={`users/${user}`}
      render={({ isLoading, data }) => (
        <Content contrast>
          {isLoading ? (
            <Loader />
          ) : (
            <ScrollView
              contentContainerStyle={{
                width: Dimensions.get('window').width,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20
              }}
            >
              <UserCard
                {...data}
                onPress={() => navigation.navigate('Account', { data })}
              />

              <Btn
                title="Sign out"
                color="#fdfdfd"
                onPress={() => {
                  signOut().then(() => navigation.navigate('SignedOut'));
                }}
              />
            </ScrollView>
          )}
        </Content>
      )}
    />
  );
}
