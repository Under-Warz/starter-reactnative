// import vendors
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {  
	Spinner
} from 'native-base';

// import classes

// import theme
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/platform';

const { width, height } = Dimensions.get('window');

class Loader extends React.Component {

	//________________________________________________________
  // -                                           CONSTRUCTOR
	constructor(props) {
		super(props);
	}

	//________________________________________________________
  // -                                       PRIVATE METHODS

	//________________________________________________________
  // -                                        PUBLIC METHODS

	render() {
		return (
			<View style={[styles.container, (this.props.style ? this.props.style : null)]}>
				<Spinner color="#000" />
			</View>
		);
	}

	//________________________________________________________
  // -                                        EVENTS METHODS
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: (height / 2) - 50,
		left: (width / 2) - 50,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		width: 100,
		height: 100,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Loader;