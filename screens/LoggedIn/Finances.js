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
}
