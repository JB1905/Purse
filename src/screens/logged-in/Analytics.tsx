import React, { useState, useEffect } from 'react';
import SegmentedControlIOS from '@react-native-community/segmented-control';

import Container from '../../components/Container';
import Splash from '../../components/Splash';
import Loader from '../../components/Loader';
import Card from '../../components/Card';

const Analytics: React.FC = () => {
  const [tab, setTab] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
  }, []);

  return data ? (
    <Container scrollEnabled>
      {data.length > 0 ? (
        <>
          <SegmentedControlIOS
            values={['Week', 'Month', 'Year']}
            selectedIndex={tab}
            onChange={(e: any) => setTab(e.nativeEvent.selectedSegmentIndex)}
            style={{
              // width: '100%',
              // maxWidth: 450,
              // alignSelf: 'center',
              marginHorizontal: 20,
              marginBottom: 6,
            }}
          />
        </>
      ) : (
        <Splash
          title="Statistics are not available yet"
          message="You need to add more financial data"
        />
      )}
    </Container>
  ) : (
    <Loader />
  );
};

export default Analytics;
