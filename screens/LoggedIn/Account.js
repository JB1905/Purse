import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { KeyboardContent } from '../../components/Content';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Btn } from '../../components/Button';

import { updateUser } from '../../api';

export default function Account({ navigation }) {
  const data = navigation.getParam('data');

  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);

  const [error, setError] = useState(null);

  return (
    <KeyboardContent>
      {error && <Error>{error}</Error>}
    </KeyboardContent>
  );
}
