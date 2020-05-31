import React from 'react';


export const themes = {
  light: {
    background: "#fff"
  },
  dark: {
    background: "#ccc"
  }
};

export const ThemeContext = React.createContext(themes.dark);
