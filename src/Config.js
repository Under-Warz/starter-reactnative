import _ from 'lodash';
import { AsyncStorage } from 'react-native';

export default (() => {
	const dev = {
		api: {
			host: ""
		}
	};

	const prod = {
		api: {
			host: ""
		}
	};

	const common = {
		store: {
			version: "1",
			config: {
		  	storage: AsyncStorage,
		  	blacklist: []
		  }
		}
	};

	return _.extend(common, (__DEV__ ? dev : prod));
})();