import React from 'react'
import Nav from './components/Nav';
import Account from './components/Account';
import Footer from './components/Footer';
import './assets/sass/main.scss';

const App = () => {
  return (
    <div>
      <Nav/>
      <Account/>
      <Footer/>  
    </div>
  )
}

export default App
