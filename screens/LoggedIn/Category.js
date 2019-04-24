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
