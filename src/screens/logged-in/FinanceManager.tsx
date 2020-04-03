import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  Dimensions,
  ActionSheetIOS,
  Modal,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SegmentedControlIOS from '@react-native-community/segmented-control';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';
import { Image, Icon, colors } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Picker from '../../components/Picker';
import Splash from '../../components/Splash';
import Loader from '../../components/Loader';
import HeaderButton from '../../components/HeaderButton';

import { addData, updateData, getCategories, getCurrentUser } from '../../api';

import { MainProps } from '../../types/Navigation';

type FormData = {
  type: string;
  value: string;
  title: string;
  category: string;
  date: number;
  coords: object;
  images: any[];
};

const FinanceManager: React.FC<MainProps<'FinanceManager'>> = ({
  route,
  navigation,
}) => {
  const id = route.params?.id ?? '';

  const { colors } = useTheme();

  const { register, handleSubmit, reset, setValue, getValues } = useForm<
    FormData
  >({
    defaultValues: {
      type: route.params?.type ?? null,
      value: route.params?.value ?? '',
      title: route.params?.title ?? '',
      category: route.params?.category ?? '',
      date: route.params?.date ?? Date.now(),
      coords: route.params?.coords ?? {},
      images: [],
    },
  });

  useEffect(() => {
    register('value', { required: true });
    register('title', { required: true });
  }, [register]);

  const [tab, setTab] = useState(0);

  const [checking, setChecking] = useState<boolean>(true);
  const [error, setError] = useState<string>(null);

  const [categories, setCategories] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  useEffect(() => {
    getCategories(getCurrentUser()?.uid).then((res) => {
      setCategories(res);
      setChecking(false);
    });
  }, []);

  const createNewFinance = async () => {
    try {
      // if (error) setError(null);

      await addData({ name, user: getCurrentUser()?.uid });

      Alert.alert(`Added data: ${name}`, null, [
        {
          text: 'Done',
          onPress: navigation.goBack,
        },
        {
          text: 'Add more',
          style: 'destructive',
          // onPress: resetForm
        },
      ]);
    } catch (err) {
      setError(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${id ? 'Edit' : 'Create'} Finance`,
      headerLeft: () => (
        <HeaderButton
          title="Cancel"
          iconName="close"
          onPress={navigation.goBack}
          spaces
        />
      ),
      headerRight: () =>
        categories.length > 0 && (
          <HeaderButton
            title="Save"
            iconName="save"
            onPress={handleSubmit(createNewFinance)}
            spaces
          />
        ),
    });
  }, [navigation, categories]);

  // const [showModal, setShowModal] = useState<string | boolean>(false);

  // useEffect(() => {
  //   getCameraRollPermission();
  // }, []);

  // const handleChooseImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3]
  //   });

  //   if (!result.cancelled) {
  //     setImages(images => [...images, result]);
  //   }
  // };

  // const showImageSourcesList = () => {
  //   ActionSheetIOS.showActionSheetWithOptions(
  //     {
  //       options: ['Select image from camera roll', 'Take a photo', 'Cancel'],
  //       cancelButtonIndex: 2
  //     },
  //     buttonIndex => {
  //       if (buttonIndex === 0) {
  //         handleChooseImage();
  //       } else if (buttonIndex === 1) {
  //         setShowModal('camera');
  //       }
  //     }
  //   );
  // };

  // const updateExisitingData = async () => {
  //   try {
  //     if (error) setError(null);

  //     await updateData(id, { name });

  //     Alert.alert(`Updated data: ${name}`, null, [
  //       {
  //         text: 'Done',
  //         onPress: () => navigation.goBack()
  //       }
  //     ]);
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

  //   if (type && value && title && category && date) {
  //     Alert.alert(
  //       'Do you want to save this finance?',
  //       `Finance ${title} will be ${id ? 'updated' : 'added'}`,
  //       [
  //         {
  //           text: 'Cancel',
  //           style: 'cancel'
  //         },
  //         {
  //           text: id ? 'Update' : 'Save',
  //           style: 'destructive',
  //           onPress: id ? updateExisitingData : createNewData
  //         }
  //       ]
  //     );
  //   }
  // };

  return checking ? (
    <Loader />
  ) : categories?.length > 0 ? (
    <>
      <Container keyboard scrollEnabled>
        <Wrapper>
          <Input
            onChangeText={(text) => setValue('value', text)}
            defaultValue={getValues().value}
            label="Amount"
            placeholder="Amount"
            keyboardType="number-pad"
            flat
          />
        </Wrapper>

        <Wrapper>
          <Input
            onChangeText={(text) => setValue('title', text)}
            defaultValue={getValues().title}
            label="Title"
            placeholder="Title"
            flat
          />
        </Wrapper>

        {/* <SegmentedControlIOS
          values={['Incomes', 'Expenses']}
          selectedIndex={type}
          onChange={e => setType(e.nativeEvent.selectedSegmentIndex)}
          style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 6 }}
        /> */}

        <SegmentedControlIOS
          values={['Category', 'Date', 'Place']}
          selectedIndex={tab}
          onChange={(e: any) => setTab(e.nativeEvent.selectedSegmentIndex)}
          style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 6 }}
        />

        {/* <Wrapper>
          <Box spaces={tab !== 2}>
            {tab === 0 ? (
              <Picker
                selectedValue={category}
                onValueChange={setCategory}
                style={{
                  maxWidth: 440,
                  width: '100%'
                }}
              >
                <Picker.Item label="" value="" key={0} />

                {categories.map(([key, value]: [string, string], index) => (
                  <Picker.Item label={value.name} value={key} key={index + 1} />
                ))}
              </Picker>
            ) : tab === 1 ? (
              <DateTimePicker
                value={new Date(date)}
                onChange={(e, date) => setDate(date)}
                mode="datetime"
              />
            ) : (
              <MapView
                pitchEnabled={false}
                rotateEnabled={false}
                zoomEnabled={false}
                scrollEnabled={false}
                onPress={() => setShowModal('map')}
                cacheEnabled
                style={{
                  width: '100%',
                  height: (Dimensions.get('window').width / 5) * 3
                }}
              >
                <Marker coordinate={coords} />
              </MapView>
            )}
          </Box>
        </Wrapper>

        <Wrapper
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15
          }}
        >
          <Button title="Add Image" onPress={showImageSourcesList} />
        </Wrapper>

        {images.map(image => (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100 }}
          />
        ))} */}
      </Container>

      {/* <Modal animationType="slide" visible={!!showModal}>
        {showModal === 'camera' ? (
          <Camera style={{ flex: 1 }}></Camera>
        ) : showModal === 'map' ? (
          <MapView style={{ flex: 1 }}>
            <Marker coordinate={coords} />
          </MapView>
        ) : null}

        <Button title="Close" onPress={() => setShowModal(false)} />
      </Modal> */}
    </>
  ) : (
    <Splash
      title="No any categories"
      message="Before add expense create new category"
    >
      <Button
        title="Add it here"
        onPress={() => navigation.navigate('CategoryManager')}
        type="clear"
      />
    </Splash>
  );
};

export default FinanceManager;
