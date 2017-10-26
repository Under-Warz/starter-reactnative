// import classes
import { PermissionsAndroid, Platform } from 'react-native';

class Helpers {
	static getCurrentRoute = (state) => {
	  const findCurrentRoute = (navState) => {
	    if (navState.index !== undefined) {
	      return findCurrentRoute(navState.routes[navState.index])
	    }
	    return navState.routeName
	  }
	  return findCurrentRoute(state)
	}

	// Check geolocation permission
	static checkGeolocPermission() {
		return new Promise((resolve, reject) => {
			if (Platform.OS === "ios") {
				resolve();
			}
			else {
				PermissionsAndroid
					.check("android.permission.ACCESS_FINE_LOCATION")
					.then((granted) => {
						if (granted) {
							resolve();
						}
						else {
							reject();
						}
					})
					.catch((err) => {
						reject();
					});
			}
		});
	}

	// Request geoloc permission
	static requestGeolocPermission() {
		return new Promise((resolve, reject) => {
			if (Platform.OS === "ios") {
				resolve();
			}
			else {
				PermissionsAndroid
					.request("android.permission.ACCESS_FINE_LOCATION")
					.then((resp) => {
				    if(resp == "granted") {
			        resolve();
				    } else {
			        reject();
				    }
					})
					.catch((err) => {
						reject();
					});
			}
		});
	}
}

export default Helpers;