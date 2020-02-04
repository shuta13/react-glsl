import React from 'react';

import './AppMenuButton.scss'

const AppMenuButton: React.FC<{ name: string, changeCanvas: (payload: string) => void }> = ({ name, changeCanvas }) => {
  return (
    <button className="AppMenuButtonWrap" onClick={() => { changeCanvas(name) }}>
      { name }
    </button>
  );
}

export default AppMenuButton;