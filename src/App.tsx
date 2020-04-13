import React from 'react';
import { registerRootComponent } from 'expo';

import Main from './Main';

const App: React.FC = () => <Main />;

registerRootComponent(App);
