import React from 'react';
import LayoutEditor from './views/LayoutEditor';
import { ThemeProvider } from '@embeddedchat/ui-elements';
import DefaultTheme from './theme/DefaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme} mode="light">
      <LayoutEditor />;
    </ThemeProvider>
  );
};

export default App;
