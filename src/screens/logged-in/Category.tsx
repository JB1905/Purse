import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  RefreshControl,
  View,
  Text,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
import { SwipeListView } from 'react-native-swipe-list-view';
import MapView, { Marker } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';

import Loader from '../../components/Loader';
import ListItem from '../../components/ListItem';
import Splash from '../../components/Splash';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

import { getDataForCategory, deleteCategory } from '../../api';

import { LoggedInProps } from '../../types/Navigation';

const Category: React.FC<LoggedInProps<'Category'>> = ({
  route,
  navigation,
}) => {
  const { id, name } = route.params;

  const { colors } = useTheme();

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Edit Category',
          'Add Data for Category',
          'Remove Category with Data',
          'Cancel',
        ],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 3,
        tintColor: colors.primary,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          navigation.navigate('CategoryManager', { id, name });
        } else if (buttonIndex === 1) {
          navigation.navigate('FinanceManager', {
            category: id,
          });
        } else if (buttonIndex === 2) {
          deleteCategory(id).then(() => navigation.goBack());
        }
      }
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerRight: () => (
        <TouchableOpacity onPress={showActionSheet}>
          <Icon name="ios-more" color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [tab, setTab] = useState(0);

  const [data, setData] = useState<firebase.firestore.DocumentData[]>(null);

  useEffect(() => {
    getDataForCategory(id).then((res) => setData(res));
  }, []);

  return data ? (
    data.length > 0 ? (
      <>
        <SegmentedControlIOS
          values={['Expenses List', 'Map']}
          selectedIndex={tab}
          onChange={(e: any) => setTab(e.nativeEvent.selectedSegmentIndex)}
          style={{
            marginHorizontal: 10,
            marginVertical: 6,
          }}
        />

        {tab === 0 ? (
          <SwipeListView
            data={data}
            scrollEnabled={true}
            refreshControl={
              <RefreshControl
                tintColor={colors.primary}
                refreshing={null}
                onRefresh={null}
              />
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subtitle={item.value}
                leftIcon={null}
              />
            )}
            renderHiddenItem={(data) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 75,
                    height: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#226ff5',
                  }}
                  onPress={() => {
                    navigation.navigate('FinanceManager', {
                      ...data.item,
                    });
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 75,
                    height: 67,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f52222',
                  }}
                  onPress={null}
                >
                  <Text style={{ color: '#fff', fontSize: 16 }}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-150}
          />
        ) : (
          <MapView style={{ flex: 1 }}>
            {data.map((item) => (
              <Marker key={item.id} coordinate={item.coords} />
            ))}
          </MapView>
        )}
      </>
    ) : (
      <Splash title="Not found data for category">
        <Button
          title="Add it here"
          onPress={() => {
            navigation.navigate('FinanceManager', {
              category: route?.params?.id,
            });
          }}
          type="clear"
        />
      </Splash>
    )
  ) : (
    <Loader />
  );
};

export default Category;
