import React from 'react';
import Window from '../ui/Window';
import Dock from '../ui/Dock';
import AppBar from '../ui/AppBar';

function MainScreen() {
  return (
    <>
        <div id='mainscreen'>
          <AppBar />
            <Window />
            <Dock />
        </div>
    </>
  )
}

export default MainScreen