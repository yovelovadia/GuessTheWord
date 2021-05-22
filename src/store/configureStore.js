import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// To show in React Devtools the redux state
const composeEnhancers =
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ((func) => func);

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store);
export { store, persistor };
