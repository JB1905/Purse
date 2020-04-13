import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Alert, FlatList, TouchableOpacity, Platform } from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
import NativeColorPicker from 'native-color-picker';
import { useTheme } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Input';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import Error from '../../components/Error';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';

import { colors as categoryColors } from '../../constants/colors';
import { icons } from '../../constants/icons';

import { addCategory, updateCategory, getCurrentUser } from '../../api';

import { MainProps } from '../../types/Navigation';

type FormData = {
  name: string;
  color: string;
  icon: string;
};

const CategoryManager: React.FC<MainProps<'CategoryManager'>> = ({
  route,
  navigation,
}) => {
  const { colors } = useTheme();

  const [tab, setTab] = useState(0);

  const [error, setError] = useState<string>(null);

  const id = route?.params?.id ?? '';

  const defaultValues = {
    name: route?.params?.name ?? '',
    color: route?.params?.color ?? '',
    icon: route?.params?.icon ?? '',
  };

  const { register, handleSubmit, setValue, getValues, watch, reset } = useForm<
    FormData
  >({ defaultValues });

  useEffect(() => {
    register('name', { required: true });
    register('color', { required: true });
    // register('icon', { required: true });
  }, [register]);

  const createNewCategory = async (data: FormData) => {
    // console.log(data);

    try {
      // if (error) setError(null);

      await addCategory({ ...data, user: getCurrentUser()?.uid });

      // console.log(true);

      Alert.alert(`Added category: ${name}`, null, [
        {
          text: 'Done',
          onPress: navigation.goBack,
        },
        {
          text: 'Add more',
          style: 'destructive',
          // onPress: resetForm,
        },
      ]);
    } catch (err) {
      setError(err);
    }
  };

  const updateExisitingCategory = async () => {
    try {
      // await updateCategory(id, { name, color, icon });

      Alert.alert(`Updated category ${name}`, null, [
        {
          text: 'Done',
          onPress: navigation.goBack,
        },
      ]);
    } catch (err) {
      setError(err);
    }
  };

  // const submit = () => {
  //   if (name && color && icon) {
  //     Alert.alert(
  //       'Do you want to save this category?',
  //       `Category ${name} will be ${id ? 'updated' : 'added'}`,
  //       [
  //         {
  //           text: 'Cancel',
  //           style: 'cancel'
  //         },
  //         {
  //           text: id ? 'Update' : 'Save',
  //           style: 'destructive',
  //           onPress: id ? updateExisitingCategory : createNewCategory
  //         }
  //       ]
  //     );
  //   } else {
  //     setError(null);
  //   }
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
          onPress={handleSubmit(createNewCategory)}
          spaces
        />
      ),
    });
  }, [navigation]);

  return (
    <Container keyboard scrollEnabled>
      <Wrapper>
        <Input
          onChangeText={(text) => setValue('name', text)}
          defaultValue={getValues().name}
          label="Category name"
          placeholder="Category name e.g: Food"
          flat
        />
      </Wrapper>

      {Platform.OS === 'ios' && (
        <SegmentedControlIOS
          values={['Colour', 'Glyph']}
          selectedIndex={tab}
          onChange={(e: any) => setTab(e.nativeEvent.selectedSegmentIndex)}
          style={{
            maxWidth: 350,
            left: 0,
            right: 0,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 6,
          }}
        />
      )}

      <Wrapper>
        <Box>
          {tab === 0 ? (
            <NativeColorPicker
              sort
              gradient
              shadow
              itemSize={46}
              colors={categoryColors}
              markerType="border"
              markerDisplay="#fff"
              scrollEnabled={false}
              contentContainerStyle={{ alignItems: 'center' }}
              onSelect={(color) => setValue('color', color)}
              selectedColor={watch().color}
            />
          ) : (
            <FlatList
              data={icons}
              numColumns={5}
              keyExtractor={(item) => item}
              style={{ paddingHorizontal: 38 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 48,
                    height: 48,
                    margin: 10,
                    justifyContent: 'center',
                    backgroundColor: '#eee',
                    borderRadius: 10,
                  }}
                >
                  <Icon name={item} color={colors.primary} size={30} />
                </TouchableOpacity>
              )}
            />
          )}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default CategoryManager;
