import react from 'react';
import './App.scss';
import ControlsMenuColor from './ControlsMenuColor';

function MainContainer() {
  return(
    <div className="MainContainer">
      <div className="optionMenu--Mobile"></div>
      <ControlsMenuColor />
      {/* <div className="controlsMenu--Position"></div> */}
      {/* <div className="controlsMenu--Size"></div> */}
      {/* <div className="controlsMenu--Actions"></div> */}
    </div>
  );
}

export default MainContainer;