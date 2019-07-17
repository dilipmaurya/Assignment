import React, { Component } from 'react';
import './App.css';

import Info from './OtherComp/Info';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2>I'm here</h2>
        <Info/>
      </div>
    );
  }
}

export default App;
