import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCf7T3LyKPg7NT1x7uu1b07ZBdP0olOtdc",
      authDomain: "manager-94f6c.firebaseapp.com",
      databaseURL: "https://manager-94f6c.firebaseio.com",
      projectId: "manager-94f6c",
      storageBucket: "manager-94f6c.appspot.com",
      messagingSenderId: "1089653464657"
    }
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router/>    
        </View>
      </Provider>
      
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#C2D793',
    justifyContent: 'center',
  },
};
