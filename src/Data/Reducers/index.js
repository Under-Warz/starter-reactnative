import { combineReducers } from 'redux';

import navigation from './navigation';
import app from './app';

export default combineReducers({
	navigation,
	app
});