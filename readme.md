[![Laravel](https://cdn-images-1.medium.com/max/700/1*IIon4wW05TT3tGGzVPQvUw.png)](https://facebook.github.io/react-native/)

# STARTER REACT NATIVE

## Features

- [React Native](https://facebook.github.io/react-native/)
- [Native Base](https://nativebase.io/)
- [Redux](http://redux.js.org/)
- [Apisauce](https://github.com/infinitered/apisauce)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [React Navigation](https://github.com/react-community/react-navigation)
- [Bugsnag](https://www.bugsnag.com/)
- [OneSignal](https://onesignal.com/)

## Installation

You need to first init a react native empty project with `react-native init AwesomeProject`.
Then insert starter's files into your newly generated app.

The entry file point is in `src/Root`.

```js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import Root from './src/Root';

AppRegistry.registerComponent('MyApp', () => Root);

```

Install dependencies 

```bash
yarn install
RNFB_ANDROID_PERMISSIONS=true react-native link
```

## Development
```bash
react-native run-android|run-ios
```

## Build

### Bugsnag source maps
```bash
npm run sourcemaps
```

### iOS 
Build via Xcode

### Android
```bash
cd android
./gradlew assembleRelease
```