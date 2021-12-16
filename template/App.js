import React from 'react';
import {Provider} from 'react-redux';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {ThemeContext} from './src/common/theme-context';

import {default as custom_theme} from './src/common/theme.json';

import RootNavigator from './src/navigation/Router';

import store from './src/redux/store/store';

export default function App() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={{...eva[theme], ...custom_theme}}>
          <RootNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
