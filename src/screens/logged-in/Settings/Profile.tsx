import React, { useCallback } from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { Stack, Box } from '@mobily/stacks';

import Container from '../../../components/Container';
import Button from '../../../components/Button';
import StatusBar from '../../../components/StatusBar';
import ItemGroup from '../../../components/ItemGroup';
import ProfileCard from '../../../components/ProfileCard';
import AppInfo from '../../../components/AppInfo';

import { useAuth } from '../../../hooks/useAuth';

import { LoggedInProps } from '../../../types/Navigation';

import { Route } from '../../../enums/Route';

// interface Setting {
//   title: string;
//   screen: Route;
// }

const accountSettings = [
  { title: 'Connected Users', screen: Route.USERS_CONNECT },
  { title: 'Payment Methods', screen: Route.PAYMENT_METHODS },
  { title: 'Connect with Bank Account', screen: Route.BANKS_CONNECT },
];

const localSettings = [
  { title: 'App Icon', screen: Route.APP_ICON },
  { title: 'Appearance', screen: Route.APPEARANCE },
  { title: 'Bottom Tabs', screen: Route.BOTTOM_NAV_ITEMS },
  { title: 'Local Authentication', screen: Route.LOCAL_AUTHENTICATION },
];

const Profile: React.FC<LoggedInProps<Route.PROFILE>> = ({ navigation }) => {
  const { logout } = useAuth();

  const currentUser = useSelector((state) => state.firebase.profile);

  const logoutFromAccount = useCallback(() => {
    if (Platform.OS === 'ios') {
      navigation.goBack();
    }

    logout();
  }, []);

  return (
    <Container scrollEnabled>
      <StatusBar isModal />

      <Box paddingX={4} paddingY={8}>
        <Stack space={8}>
          {currentUser && (
            <ProfileCard
              data={currentUser}
              onPress={() => navigation.navigate(Route.USER)}
            />
          )}

          <ItemGroup title="Account Settings" items={accountSettings} />

          <ItemGroup title="Local Settings" items={localSettings} />

          <Button title="Sign Out" onPress={logoutFromAccount} />

          <AppInfo />
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
