import react from 'react';
import './index.scss';

class App extends react.Component{
  openMobileMenu__Options = () => {
    const mobileMenu__Options = document.getElementById("mobileMenu__Options");

    if (mobileMenu__Options.style.display === "block") {
      mobileMenu__Options.style.display = "none"
    } else {
      mobileMenu__Options.style.display = "block"
      // window.addEventListener('click', function handler(e) {
      //   if(!document.getElementById('mobileMenu').contains(e.target) && !mobileMenu__Options.contains(e.target)) {
      //     mobileMenu__Options.style.display = "none";
      //     window.removeEventListener('click', handler);
      //   } 
      // })
    };
  }
  
  openMobileMenu__Options__Color = () => {
    const mobileMenu__Options__Color = document.getElementById("mobileMenu__Options__Color");

    if (mobileMenu__Options__Color.style.display === "block") {
      mobileMenu__Options__Color.style.display = "none";
    } else {
      mobileMenu__Options__Color.style.display = "block";
      // none.addEventListener("click", function handler(e) {
      //   if(!mobileMenu__Options__Color.contains(e.target)) {
      //     mobileMenu__Options__Color.style.display = "none";
      //     window.removeEventListener("click", handler);
      //   }
      // });
    }
  }
  openMobileMenu__Options__Position = () => {
    const mobileMenu__Options__Position = document.getElementById("mobileMenu__Options__Position");

    if (mobileMenu__Options__Position.style.display === "block") {
      mobileMenu__Options__Position.style.display = "none";
    } else {
      mobileMenu__Options__Position.style.display = "block";
      // window.addEventListener("click", function handler(e) {
      //   if(!mobileMenu__Options__Position.contains(e.target)) {
      //     mobileMenu__Options__Position.style.display = "none";
      //     window.removeEventListener("click", handler);
      //   }
      // });
    }
  }
  openMobileMenu__Options__Size = () => {
    const mobileMenu__Options__Size = document.getElementById("mobileMenu__Options__Size");

    if (mobileMenu__Options__Size.style.display === "block") {
      mobileMenu__Options__Size.style.display = "none";
    } else {
      mobileMenu__Options__Size.style.display = "block";
      // window.addEventListener("click", function handler(e) {
      //   if(!mobileMenu__Options__Size.contains(e.target)) {
      //     mobileMenu__Options__Size.style.display = "none";
      //     window.removeEventListener("click", handler);
      //   }
      // });
    }
  }
  openMobileMenu__Options__Action = () => {
    const mobileMenu__Options__Action = document.getElementById("mobileMenu__Options__Action");

    if (mobileMenu__Options__Action.style.display === "block") {
      mobileMenu__Options__Action.style.display = "none";
    } else {
      mobileMenu__Options__Action.style.display = "block";
      // window.addEventListener("click", function handler(e) {
      //   if(!mobileMenu__Options__Action.contains(e.target)) {
      //     mobileMenu__Options__Action.style.display = "none";
      //     window.removeEventListener("click", handler);
      //   }
      // });
    }
  }

  render(){
    return (
      <main>
        <ul className="first-group">
          <li>2021년12월18일-1</li>
          <ul className="second-group">
            <li className="mobile-menu" id="mobileMenu" onClick={this.openMobileMenu__Options}>Options</li>
            <li className="desktop-menu">Color</li>
            <li className="desktop-menu">Position</li>
            <li className="desktop-menu">Size</li>
            <li className="desktop-menu">Action</li>
          </ul>
        </ul>
        <div className="main-container">
          <div className="mobile-menu__options" id="mobileMenu__Options">
            <ul>
              <li onClick={this.openMobileMenu__Options__Color}>Color</li>
              <li onClick={this.openMobileMenu__Options__Position}>Position</li>
              <li onClick={this.openMobileMenu__Options__Size}>Size</li>
              <li onClick={this.openMobileMenu__Options__Action}>Action</li>
            </ul>
          </div>
          <div className="mobile-menu__options__color" id="mobileMenu__Options__Color">
            <ul>
              <li>Background</li>
              <li>Text</li>
            </ul>
          </div>
          <div className="mobile-menu__options__position" id="mobileMenu__Options__Position">
            <ul>
              <li>Logo</li>
              <li>Navbar</li>
            </ul>
          </div>
          <div className="mobile-menu__options__size" id="mobileMenu__Options__Size">
            <ul>
              <li>Text</li>
              <li>Navbar</li>
            </ul>
          </div>
          <div className="mobile-menu__options__action" id="mobileMenu__Options__Action">
            <ul>
              <li>Open Menu on</li>
              <li>Animations</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default App;