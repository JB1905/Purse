import React, { useState } from 'react';
import { View, SectionList, Button, Alert } from 'react-native';
import { FirestoreCollection } from 'react-firestore';

import { Content } from '../../components/Content';
import { Loader } from '../../components/Loader';
import { SegmentedControl } from '../../components/SegmentedControl';
import { ListHeader, ListItem } from '../../components/SectionList';
import { Splash } from '../../components/Splash';

import { deleteData } from '../../api';

export default function Category({ navigation }) {
  const { id, name, icon } = navigation.getParam('data');

  const [section, setSection] = useState(0);

  const renderData = data => {
    const alert = item => {
      Alert.alert(`Do you want remove ${item.title}?`, null, [
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => deleteData(item.id)
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]);
    };

    const buttons = item => [
      {
        text: 'Edit',
        backgroundColor: '#2d7bf6',
        underlayColor: '#2d7bf6cc',
        onPress: () => navigation.navigate('FinanceManager', { item })
      },
      {
        text: 'Remove',
        backgroundColor: '#ec5041',
        underlayColor: '#ec5041cc',
        onPress: () => alert(item)
      }
    ];
  };

  const notFound = ({ id, name }) => (
    <Splash message={`No expenses for ${name}`}>
      <Button
        title="Add them here"
        color="#5ac59a"
        onPress={() => {
          navigation.navigate('FinanceManager', {
            item: { category: id }
          });
        }}
      />
    </Splash>
  );

  return (
    <FirestoreCollection
      path="data"
      filter={['category', '==', id]}
      render={({ isLoading, data }) => (
        <Content contrast>
          {isLoading ? (
            <Loader />
          ) : data.length ? (
            renderData(data)
          ) : (
            notFound({ id, name })
          )}
        </Content>
      )}
    />
  );
}
