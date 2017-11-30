// import vendors
import React from 'react';
import { AppState, BackHandler, View, Text, StyleSheet, Image } from 'react-native';
import { StyleProvider } from 'native-base';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import moment from 'moment';
import OneSignal from 'react-native-onesignal';

// import classes
import Helpers from './Helpers';
import AppNavigator from './Navigator/AppNavigator';
import Loader from './Components/Loader';

// import theme
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/platform';

const mapStateToProps = (state) => ({
  app: state.app,
  navigation: state.navigation
});

class App extends React.Component {

	//________________________________________________________
  // -                                           CONSTRUCTOR
	constructor(props) {
		super(props);

    this.state = {
      appState: AppState.currentState
    };
	}

	//________________________________________________________
  // -                                       PRIVATE METHODS

  _handleAppStateChange = (nextAppState) => {
    // Come from background state and become active
    if (this.state.appState === 'background' && nextAppState === 'active') {
      
    }

    this.setState({appState: nextAppState});
  }

  _onReceived = (notification) => {
    
  }

  _onOpened = (openResult) => {
    const data = openResult.notification.payload.additionalData;

    if (data && data.type) {
      
    }
  }

  _onRegistered = (notifData) => {
    
  }

  _onIds = (device) => {
    
  }

	//________________________________________________________
  // -                                        PUBLIC METHODS

  componentWillMount() {
    // Listen form AppState change
    AppState.addEventListener('change', this._handleAppStateChange);

    // OneSignal
    OneSignal.addEventListener('received', this._onReceived);
    OneSignal.addEventListener('opened', this._onOpened);
    OneSignal.addEventListener('registered', this._onRegistered);
    OneSignal.addEventListener('ids', this._onIds);
    OneSignal.inFocusDisplaying(0);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this._onBackPress);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    BackHandler.removeEventListener("hardwareBackPress", this._onBackPress);
    OneSignal.removeEventListener('received', this._onReceived);
    OneSignal.removeEventListener('opened', this._onOpened);
    OneSignal.removeEventListener('registered', this._onRegistered);
    OneSignal.removeEventListener('ids', this._onIds);
  }

	render() {
    // If app is still loading
    if (!this.props.app.rehydrated) {
      return <StyleProvider style={getTheme(variables)}>
        <View style={[styles.loaderView, styles.container]}>
          <Loader />
        </View>
      </StyleProvider>;
    }

		return (
      <View style={styles.container}>
  			<AppNavigator 
          ref={nav => { this._navigator = nav; }}
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
          })} 
        />

        {this.props.app.isLoading && <Loader />}
      </View>
		);
	}

	//________________________________________________________
  // -                                        EVENTS METHODS

	_onBackPress = () => {
    const { dispatch, navigation } = this.props;

    // Close app if home or login
    if (Helpers.getCurrentRoute(navigation) === "Home") {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaderView: {
    backgroundColor: variables.toolbarDefaultBg,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps)(App);