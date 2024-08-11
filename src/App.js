import React, { Component } from 'react';
import MapComponent from './MapComponent';
import MyLocation from './MyLocation';

class App extends Component {
  render() {
    return (
      <div>
        
        {/* <MapComponent/> */}
        <MyLocation/>
        
      </div>
    );
  }
}

export default App;