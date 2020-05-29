import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  lazy,
  Suspense,
} from 'react';
import {
  ActionSheetIOS,
  Alert,
  Picker,
  findNodeHandle,
  Image,
  Modal,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useTheme } from '@react-navigation/native';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import MapView, { Marker } from 'react-native-maps';

import Container from '../../components/Container';
import HeaderButton from '../../components/HeaderButton';
import StatusBar from '../../components/StatusBar';
import { SectionBox } from '../../components/SectionBox';
import Loader from '../../components/Loader';

import { usePhotos } from '../../hooks/usePhotos';

import type { MainProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';

const Input = lazy(() => import('../../components/Input'));
const Button = lazy(() => import('../../components/Button'));
const FallbackScreen = lazy(() => import('../../components/FallbackScreen'));

const Maps = lazy(() => import('../../containers/Map'));

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
  const firestore = useFirestore();

  const id = route.params?.id ?? '';

  const { colors } = useTheme();

  const ref = useRef(null);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  useFirestoreConnect([Collection.Categories]);

  const categories = useSelector(
    (state: any) => state.firestore.ordered.categories
  );

  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({
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
    register('category', { required: true });
  }, [register]);

  const { getImageFromCameraRoll } = usePhotos();

  const onSubmit = async (data: FormData) => {
    const createFinance = () => {
      if (error) setError('');

      setLoading(true);

      try {
        firestore.collection(Collection.Data).add({
          ...data, // user: getCurrentUser()?.uid
        });

        Alert.alert(`Added data: ${data.title}`, null, [
          {
            text: 'Done',
            style: 'cancel',
            onPress: navigation.goBack,
          },
          {
            text: 'Add more',
            onPress: () => reset(),
          },
        ]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const updateFinance = () => {
      setLoading(true);

      try {
        firestore.collection(Collection.Data).doc(id).update(data);

        Alert.alert(`Updated ${data.title}`, null, [
          {
            text: 'Done',
            onPress: navigation.goBack,
          },
        ]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    Alert.alert(
      'Do you want to save this finance?',
      `${data.title} will be ${id ? 'updated' : 'added'}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: id ? 'Update' : 'Save',
          style: 'destructive',
          onPress: id ? updateFinance : createFinance,
        },
      ]
    );
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
            onPress={handleSubmit(onSubmit)}
            spaces
          />
        ),
    });
  }, [navigation, categories]);

  const showImageSourcesList = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Select image from camera roll', 'Take a photo', 'Cancel'],
        cancelButtonIndex: 2,
        tintColor: colors.primary,
        anchor: findNodeHandle(ref.current),
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          getImageFromCameraRoll();
        } else if (buttonIndex === 1) {
          setOpenModal('camera');
        }
      }
    );
  };

  return (
    <Container keyboard scrollEnabled>
      <StatusBar isModal />

      <Suspense fallback={<Loader />}>
        {categories.length > 0 ? (
          <>
            <Input
              onChangeText={(text) => setValue('value', text)}
              defaultValue={watch().value}
              label="Amount"
              placeholder="Amount"
              keyboardType="number-pad"
              flat
            />

            <Input
              onChangeText={(text) => setValue('title', text)}
              defaultValue={watch().title}
              label="Title"
              placeholder="Title"
              flat
            />

            <SectionBox title="Category">
              <Picker
                selectedValue={watch().category}
                onValueChange={(value) => setValue('category', value)}
                style={{ maxWidth: 440, width: '100%', alignSelf: 'center' }}
              >
                <Picker.Item label="" value="" />

                {categories.map((category) => (
                  <Picker.Item
                    label={category.name}
                    value={category.id}
                    key={category.id}
                  />
                ))}
              </Picker>
            </SectionBox>

            <SectionBox title="Place">
              <MapView
                pitchEnabled={false}
                rotateEnabled={false}
                zoomEnabled={false}
                scrollEnabled={false}
                onPress={() => setOpenModal('map')}
                cacheEnabled
                style={{
                  width: '100%',
                  height: 240,
                }}
              >
                {/* <Marker coordinate={coords} /> */}
              </MapView>
            </SectionBox>

            <Button
              title="Add Image"
              ref={ref}
              onPress={showImageSourcesList}
            />

            {/* {getValues().images.map((image) => (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100 }}
              />
            ))} */}

            <Modal visible={!!openModal} presentationStyle="formSheet">
              <Maps />
            </Modal>
          </>
        ) : (
          <FallbackScreen
            title="No any categories"
            message="Before add expense create new category"
          >
            <Button
              title="Add it here"
              onPress={() => navigation.navigate('CategoryManager')}
              type="clear"
            />
          </FallbackScreen>
        )}
      </Suspense>

      {loading && <Loader />}
    </Container>
  );
};

export default FinanceManager;
