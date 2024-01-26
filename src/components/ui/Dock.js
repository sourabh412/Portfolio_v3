import React from 'react';

function Dock() {
  return (
    <>
    <div className="flex justify-center items-center absolute bottom-2 w-full">
    <div className="Dock" id="dock_left">l</div>
    <div className="Dock" id="dock_mid">m</div>
    <div className="Dock" id="dock_right">r</div>
    </div>
    </>
  )
}

export default Dock