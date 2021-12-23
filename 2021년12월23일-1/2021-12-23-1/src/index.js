import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);