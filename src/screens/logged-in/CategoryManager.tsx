import React, {
  lazy,
  Suspense,
  useState,
  useLayoutEffect,
  useEffect,
} from 'react';
import { Alert } from 'react-native';
import { useFirestore } from 'react-redux-firebase';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import HeaderButton from '../../components/HeaderButton';
import SegmentedControl from '../../components/SegmentedControl';
import StatusBar from '../../components/StatusBar';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import { SectionBox } from '../../components/SectionBox';

import { colors as categoryColors } from '../../constants/colors';
import { categoryIcons } from '../../constants/icons';

import type { MainProps } from '../../types/Navigation';

import { Collection } from '../../enums/Collection';

const IconPicker = lazy(() => import('../../containers/IconPicker'));
const ColorPicker = lazy(() => import('../../containers/ColorPicker'));

type FormData = {
  name: string;
  color: string;
  icon: string;
};

enum Tabs {
  Colour,
  Glyph,
}

const CategoryManager: React.FC<MainProps<'CategoryManager'>> = ({
  route,
  navigation,
}) => {
  const firestore = useFirestore();

  const [tab, setTab] = useState(0);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const id = route?.params?.id ?? '';

  const defaultValues = {
    name: route?.params?.name ?? '',
    color: route?.params?.color ?? '',
    icon: route?.params?.icon ?? '',
  };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    errors,
    reset,
  } = useForm<FormData>({ defaultValues });

  useEffect(() => {
    register('name', { required: true });
    register('color', { required: true });
    register('icon', { required: true });
  }, [register]);

  const onSubmit = async (data: FormData) => {
    if (error) setError(null);

    const createCategory = async () => {
      try {
        setLoading(true);

        firestore.collection(Collection.Categories).add({
          ...data, // user: getCurrentUser()?.uid
        });

        Alert.alert(`Added category: ${data.name}`, null, [
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

    const updateCategory = async () => {
      try {
        setLoading(true);

        firestore.collection(Collection.Categories).doc(id).update(data);

        Alert.alert(`Updated category ${data.name}`, null, [
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
      'Do you want to save this category?',
      `Category ${data.name} will be ${id ? 'updated' : 'added'}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: id ? 'Update' : 'Save',
          style: 'destructive',
          onPress: id ? updateCategory : createCategory,
        },
      ]
    );
  };

  // const isDisabled = () => {
  //   return Object.keys(errors).length > 0;
  // };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${id ? 'Edit' : 'Create'} Category`,
      headerLeft: () => (
        <HeaderButton
          title="Cancel"
          iconName="close"
          onPress={navigation.goBack}
          spaces
        />
      ),
      headerRight: () => (
        <HeaderButton
          title="Save"
          iconName="save"
          onPress={handleSubmit(onSubmit)}
          // disabled={isDisabled()}
          spaces
        />
      ),
    });
  }, [navigation, errors]);

  return (
    <Container keyboard scrollEnabled>
      <StatusBar isModal />

      <Input
        onChangeText={(text) => setValue('name', text)}
        defaultValue={getValues().name}
        label="Category name"
        placeholder="Category name e.g: Food"
        error={errors.name}
        flat
      />

      <SegmentedControl
        values={['Colour', 'Glyph']}
        // values={Object.keys(Tabs)}
        selectedIndex={tab}
        onChange={(e: any) => setTab(e.nativeEvent.selectedSegmentIndex)}
      />

      <SectionBox>
        <Suspense fallback={<Loader />}>
          {tab === Tabs.Colour ? (
            <ColorPicker
              onSelect={(color) => setValue('color', color)}
              selectedColor={watch().color}
              colors={categoryColors}
            />
          ) : (
            <IconPicker
              onSelect={(icon) => setValue('icon', icon)}
              selectedIcon={watch().icon}
              icons={categoryIcons}
            />
          )}
        </Suspense>
      </SectionBox>

      {loading && <Loader />}
    </Container>
  );
};

export default CategoryManager;
