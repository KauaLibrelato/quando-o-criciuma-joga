/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';
import {mmkvStorage} from './screens/Table/utils/mmkvStorage';
import {initializeStorage} from './screens/Table/utils/storageService';
import {theme} from './styles/theme';

function App() {
  //Injeção de dependência do storage
  initializeStorage(mmkvStorage);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme.colors.bgColor}
        />
        <SafeAreaView style={{flex: 1}}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export default App;
