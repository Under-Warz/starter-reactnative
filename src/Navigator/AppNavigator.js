// import vendors
import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// import components
import Header from '../Components/Header';

// import views
import Home from '../Views/Home';
import Sidebar from '../Views/Sidebar';

const Routes = {
	App: { 
		screen: DrawerNavigator({
			Root: {
				screen: StackNavigator({
					Home: {
						screen: Home
					}
				}, {
					initialRouteName: 'Home',
					navigationOptions: {
						header: props => <Header {...props} />
					}
				})
			}
		}, {
			initialRouteName: 'Root',
			contentComponent: props => <Sidebar {...props} />
		})
	}
};

const navigator = StackNavigator(Routes, {
	initialRouteName: 'App',
	headerMode: 'none',
	navigationOptions: {
		gesturesEnabled: false
	}
});

export default navigator;