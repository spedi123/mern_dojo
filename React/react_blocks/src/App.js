import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';
import SubContents from './components/SubContents.js';
import Advertisement from './components/Advertisement.js';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;

