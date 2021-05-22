import React from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StackNavigation } from './src/navigation';
import { store, persistor } from './src/store';

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('black');
  }
  StatusBar.setBarStyle('light-content');

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
