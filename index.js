/**
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';


function Wrapper() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Wrapper);
