import React from 'react';
// import { Fragment } from 'react/cjs/react.production.min';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function App() {
  return (
     <React.Fragment>    
      <ForwardCounter />
      <BackwardCounter />
      </React.Fragment>
  );
}

export default App;
