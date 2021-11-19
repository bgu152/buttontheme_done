import React, { useEffect, useState } from 'react';
import Header from './Header';

import ThemeContext from './ThemeContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  const [theme, setTheme] = useState({});
  useEffect(()=>
  setTheme(buttonThemes)
  ,[])
  return (
    <ThemeContext.Provider value={theme}>
      <Header/>
    </ThemeContext.Provider>
  );
}

export default App;
