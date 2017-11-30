// import vendors
import React from 'react';
import { StyleSheet } from 'react-native';
import { 
	Container, 
	Text,
	StyleProvider,
  Content
} from 'native-base';
import { connect } from 'react-redux';

// import classes

// import theme
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/platform';

const mapStateToProps = (state) => ({

});

class Home extends React.Component {

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
            <Text>Home</Text>
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

export default connect(mapStateToProps)(Home);