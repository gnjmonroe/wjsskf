import react from 'react';
import './App.scss';
import NavBar from './NavBar.js'
import MainContainer from './MainContainer.js'

class App extends react.Component {
  props = {
    color: {
      text: '#f0f0f0',
      navbar: '#222222',
    },
    position: {
      logo: 'Left',
      navbar: 'Top',
    },
    size: {
      text: '18px',
      navbar: '24px',
    },
    action: {
      openMenu: 'on Click',
      animations: 'Off'
    }
  }

  render() {
    return (
      <main>
        <NavBar />
        <MainContainer />
      </main>
    );
  }
}

export default App;