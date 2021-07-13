import React, { useState } from 'react';
import data from '../../../data.json';

function ButtonThemeModes({ themeMode, setThemeMode }) {
  const [icon, setIcon] = useState('darkmode');

  function handleChange() {
    if (themeMode === data.colors.colorOriginal) {
      setThemeMode(data.colors.darkMode);
      setIcon('originalmode');
    } else if (themeMode === data.colors.darkMode) {
      setThemeMode(data.colors.colorOriginal);
      setIcon('darkmode');
    }
  }

  return (
    <img
      src={`/images/button-${icon}.svg`}
      onClick={handleChange}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default ButtonThemeModes;
