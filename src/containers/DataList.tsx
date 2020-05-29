import React from 'react';
import { Text, RefreshControl, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const DataList: React.FC<any> = ({ data }) => {
  return (
    <SwipeListView
      refreshControl={<RefreshControl refreshing={true} />}
      data={data}
      renderItem={(data, rowMap) => (
        <View>
          <Text>{data.item.title}</Text>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View>{/* <Text>Left</Text>
          <Text>Right</Text> */}</View>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

export default DataList;
