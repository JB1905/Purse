import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Platform } from 'react-native';
import gravatar from 'gravatar';

import Container from '../../../components/Container';
import Button from '../../../components/Button';
import StatusBar from '../../../components/StatusBar';
import { ItemGroup } from '../../../components/ItemGroup';
import { ProfileCard } from '../../../components/ProfileCard';

import { useAuth } from '../../../hooks/useAuth';
import { useLocalAuth } from '../../../hooks/useLocalAuth';

import { Collection } from '../../../enums/Collection';

const Profile: React.FC<any> = ({ navigation }) => {
  const { logout } = useAuth();

  const accountSettings = [
    { title: 'Connected Users', screen: 'UsersConnect' },
    { title: 'Payment Methods', screen: 'PaymentMethods' },
    { title: 'Connect with Bank Account', screen: 'BanksConnect' },
  ];

  const localSettings = [
    { title: 'App Icon', screen: 'AppIcon' },
    { title: 'Appearance', screen: 'Appearance' },
    { title: 'Bottom Tabs', screen: 'BottomNavItems' },
  ];

  useFirestoreConnect([Collection.Users]);

  // TODO !!!!!!!!
  // const data = useSelector((state: any) => state.firestore.ordered.users[0]);

  const onLogout = () => {
    if (Platform.OS === 'ios') {
      navigation.goBack();
    }

    logout();
  };

  return (
    <Container scrollEnabled spaces={false}>
      <StatusBar isModal />

      {/* <ProfileCard /> */}

      <ItemGroup title="Account Settings" items={accountSettings} />
      <ItemGroup title="Local Settings" items={localSettings} />

      {/* {accountSettings.map((accountSetting) => (
        <Button
          title={accountSetting.title}
          onPress={() => navigation.navigate(accountSetting.screen)}
          key={accountSetting.title}
        />
      ))}

      {localSettings.map((localSetting) => (
        <Button
          title={localSetting.title}
          onPress={() => navigation.navigate(localSetting.screen)}
          key={localSetting.title}
        />
      ))} */}

      <Button title="Sign Out" onPress={onLogout} />
    </Container>
  );
};

export default Profile;
