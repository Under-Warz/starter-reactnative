// import vendors
import React from 'react';
import { StyleSheet, View, Image, ListView, Platform } from 'react-native';
import {  
	Header, 
	Left, 
	Right, 
	Body, 
	Title, 
	Button, 
	Text, 
	Icon, 
	StyleProvider,
	Badge,
	Form,
	Input,
	Item
} from 'native-base';
import { connect } from "react-redux";

// import classes
import Helpers from '../Helpers';

// import theme
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/platform';

const mapStateToProps = (state) => ({
});

class HeaderComponent extends React.Component {

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
		const { state } = this.props.navigation;
		const currentRoute = Helpers.getCurrentRoute(state);

		return (
			<StyleProvider style={getTheme(variables)}>
				<Header>
					<Left />
					<Title style={{color: '#fff'}}>{this.props.title}</Title>
	        <Right />
				</Header>
			</StyleProvider>
		);
	}

	//________________________________________________________
  // -                                        EVENTS METHODS

};

const styles = StyleSheet.create({
	
});

export default connect(mapStateToProps)(HeaderComponent);