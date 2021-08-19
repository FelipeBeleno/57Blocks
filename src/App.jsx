import React, { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import theme from './theme/theme'
import { defaulUser } from './helpers/userHelp';

import './style.css';
import { ThemeProvider } from '@material-ui/core';

export default function App() {
  useEffect(() => {
    defaulUser();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </div>
  );
}
