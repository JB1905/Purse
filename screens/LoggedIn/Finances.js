import React, { useState, useEffect } from 'react';
import { SectionList, Alert, Button, View } from 'react-native';
import { FirestoreCollection, FirestoreDocument } from 'react-firestore';

import { Content } from '../../components/Content';
import { Loader } from '../../components/Loader';
import { SegmentedControl } from '../../components/SegmentedControl';
import { ListHeader, ListItem } from '../../components/SectionList';
import { Splash } from '../../components/Splash';

import { getUser } from '../../helpers/getUser';

import { deleteData } from '../../api';

export default function Finances({ navigation, day }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  const renderData = data => {
  };

  const notFound = () => (
    <Splash message="No data found" info="There is no data for this day">
      <Button
        onPress={() => {
          navigation.navigate('FinanceManager', {
            item: { date: day }
          });
        }}
        title="Add it here"
        color="#5ac59a"
      />
    </Splash>
  );

  return (
    <FirestoreCollection
      path={'data'}
      render={({ isLoading, data }) => (
        <Content contrast={!data.length}>
          {isLoading ? <Loader /> : data.length ? renderData(data) : notFound()}
        </Content>
      )}
    />
  );
}
