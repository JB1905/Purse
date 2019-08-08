import React, { useState, useEffect } from 'react';
import { Picker, DatePickerIOS, Dimensions, Alert } from 'react-native';
import { FirestoreCollection } from 'react-firestore';

import { Content, KeyboardContent } from '../../components/Content';
import { Loader } from '../../components/Loader';
import { Input } from '../../components/Input';
import { SegmentedControl } from '../../components/SegmentedControl';
import { Tabs } from '../../components/Tabs';
import { Error } from '../../components/Error';
import { Btn } from '../../components/Button';
import { Splash } from '../../components/Splash';

import { getUser } from '../../helpers/getUser';

import { addData, updateData } from '../../api';

export default function FinanceManager({ navigation }) {
  const { id, ...params } = navigation.getParam('item') || {};

  const [value, setValue] = useState(params.value || '');
  const [title, setTitle] = useState(params.title || '');
  const [selected, setSelected] = useState(params.category || '');
  const [chosenDate, setChosenDate] = useState(
    new Date(params.date || Date.now())
  );

  const [user, setUser] = useState(null);
  const [section, setSection] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser().then(res => setUser(res));
  }, []);

  const update = () => {
    updateData(id, {
      value,
      title,
      category: selected,
      date: chosenDate.getTime()
    }).then(() => {
      Alert.alert(`Updated expense: ${title}`, null, [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Main')
        }
      ]);
    });
  };

  const add = () => {
    addData({
      value,
      title,
      category: selected,
      date: chosenDate.getTime(),
      user
    }).then(() => {
      Alert.alert('Added expense', null, [
        {
          text: 'Add more',
          onPress: () => {
            setValue('');
            setTitle('');
          }
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Main')
        }
      ]);
    });
  };

  const submit = () => {
    if (value && title && selected && chosenDate) {
      id ? update() : add();
    } else {
      setError('All fields are required.');
    }
  };

  const renderData = categories => (
    <KeyboardContent>
      <Input
        placeholder="Amount"
        onChangeText={setValue}
        keyboardType="number-pad"
        value={value}
      />

      <Input placeholder="Title" value={title} onChangeText={setTitle} />

      <SegmentedControl
        values={['Category', 'Date']}
        onChange={e => setSection(e.nativeEvent.selectedSegmentIndex)}
        selectedIndex={0}
        tintColor="#5ac59a"
      />

      <Tabs>
        {section === 0 ? (
          <Picker
            selectedValue={selected}
            onValueChange={item => setSelected(item)}
            style={{
              maxWidth: 440,
              width: Dimensions.get('window').width
            }}
          >
            <Picker.Item value="" label="" key={0} />

            {categories.map((category, index) => (
              <Picker.Item
                value={category.id}
                label={category.name}
                key={index + 1}
              />
            ))}
          </Picker>
        ) : (
          <DatePickerIOS
            date={chosenDate}
            onDateChange={e => setChosenDate(e)}
          />
        )}
      </Tabs>

      {error && <Error>{error}</Error>}

      <Btn
        title={`${id ? 'Update' : 'Add'} expense`}
        color="#fdfdfd"
        onPress={submit}
      />
    </KeyboardContent>
  );

  const notFound = () => (
    <Splash
      message="No any categories"
      info="Before add expense create new category"
    />
  );

  return (
    <FirestoreCollection
      path="categories"
      filter={['user', '==', user]}
      render={({ isLoading, data }) => (
        <Content contrast={!data.length}>
          {isLoading ? <Loader /> : data.length ? renderData(data) : notFound()}
        </Content>
      )}
    />
  );
}
