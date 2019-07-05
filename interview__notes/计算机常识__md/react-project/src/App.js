import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'weui';
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Panel from './components/Panel/Panel'

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Panel/>
    </div>
  );
}

export default App;
