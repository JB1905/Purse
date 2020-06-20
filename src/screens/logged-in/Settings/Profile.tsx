import React from 'react';
import { Text } from 'react-native-elements'
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';
import Constants from 'expo-constants'; 

import Container from '../../../components/Container';
import Button from '../../../components/Button';
import StatusBar from '../../../components/StatusBar';
import ItemGroup from '../../../components/ItemGroup';
import ProfileCard from '../../../components/ProfileCard';

import { useAuth } from '../../../hooks/useAuth';

import { LoggedInProps } from '../../../types/Navigation';

const Profile: React.FC<LoggedInProps<'Profile'>> = ({ navigation }) => {
  const { logout } = useAuth();

  const currentUser = useSelector((state: any) => state.firebase.profile);

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

  const onLogout = () => {
    if (Platform.OS === 'ios') {
      navigation.goBack();
    }

    logout();
  };

  return (
    <Container scrollEnabled spaces={false}>
      <StatusBar isModal />

      {currentUser && (
        <ProfileCard
          data={currentUser}
          onPress={() => navigation.navigate('User')}
        />
      )}

      <ItemGroup title="Account Settings" items={accountSettings} />
      <ItemGroup title="Local Settings" items={localSettings} />

      <Button
        title="Sign Out"
        onPress={onLogout}
        containerStyle={{ marginHorizontal: 16 }}
      />

      <Text>{Constants.manifest.name} v{Constants.nativeAppVersion} ({Constants.nativeBuildVersion})</Text>
    </Container>
  );
};

export default Profile;
