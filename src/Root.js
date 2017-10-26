// import vendors
import React from 'react';
import { Provider } from 'react-redux';
import { Client, Configuration } from 'bugsnag-react-native';
import Orientation from 'react-native-orientation';
import numeral from 'numeral';
import 'numeral/locales/fr';

// import classes
import configureStore from './Data/Store/configureStore';
import './ReactotronConfig';
import Config from './Config';
import App from './App';

const store = configureStore();

class Root extends React.Component {

	//________________________________________________________
  // -                                           CONSTRUCTOR
	constructor(props) {
		super(props);
		
		this._init();
	}

	//________________________________________________________
  // -                                       PRIVATE METHODS

  _init() {
  	// Lock portrait
  	Orientation.lockToPortrait();

  	// Init bugsnag if not in dev
  	if (!__DEV__) {
			const bugsnagConfig = new Configuration();
			const bugsnag = new Client(bugsnagConfig);
		}
  }


	//________________________________________________________
  // -                                        PUBLIC METHODS

	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

export default Root;