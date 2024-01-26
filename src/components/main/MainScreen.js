import React from 'react';
import Window from '../ui/Window';
import Dock from '../ui/Dock';

function MainScreen() {
  return (
    <>
        <div id='mainscreen'>
            <Window />
            <Dock />
        </div>
    </>
  )
}

export default MainScreen