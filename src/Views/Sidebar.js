// import vendors
import React from 'react';
import { StyleSheet } from 'react-native';
import { 
	Container, 
	Text,
	StyleProvider,
  Content
} from 'native-base';

// import assets

// import theme
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/platform';

class Sidebar extends React.Component {

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
			<StyleProvider style={getTheme(variables)}>
				<Container>
					<Content>
            <Text>Sidebar</Text>
          </Content>
				</Container>
			</StyleProvider>
		);
	}

	//________________________________________________________
  // -                                        EVENTS METHODS

};

const styles = StyleSheet.create({

});

export default Sidebar;