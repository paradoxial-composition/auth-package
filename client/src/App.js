import React, { Component } from 'react';

import RouterView from './router';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <RouterView></RouterView>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
