import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import Config from '../../Config';
import Reducers from '../Reducers';
import rootSaga from '../Sagas';

export default (preloadState) => {
	var middlewares = [];

	// Logger
	if (__DEV__) {
		middlewares.push(createLogger({
			collapsed: true
		}));
	}

	// Sagas
	const sagaMiddleware = createSagaMiddleware();
	middlewares.push(sagaMiddleware);

  // Thunk
  middlewares.push(thunk);

	// Create store
	const store = createStore(
		Reducers,
		preloadState,
		applyMiddleware(...middlewares),
		autoRehydrate({
			log: __DEV__
		})
	);

  // Startup function
  const startup = (error, data) => {
    
  }

  // Check to ensure latest reducer version
  Config.store.config.storage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== Config.store.version) {
    	if (__DEV__) {
      	console.log('Purge store');
      }

      // Purge store
      persistStore(store, Config.store.config).purge().then(() => {
      	Config.store.config.storage.setItem('reducerVersion', Config.store.version);
      	startup();
      });
    } else {
    	persistStore(store, Config.store.config, startup);
    }
  }).catch(() => {
    persistStore(store, Config.store.config.storage, startup);
    Config.store.config.storage.setItem('reducerVersion', Config.store.version);
  });

  // Run sagas
	sagaMiddleware.run(rootSaga);

	// Enable hot reload
	if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}