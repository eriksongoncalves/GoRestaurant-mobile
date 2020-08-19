import React from 'react';
import { StatusBar } from 'react-native';

import Theme from './styles/Theme';
import Routes from './routes/app.routes';

const App = () => {
  return (
    <Theme>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </Theme>
  );
};

export default App;
