import React from 'react';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';

const App = () => {
  // return <CounterContainer />;
  return (
    <div>
      <CounterContainer />
      <SampleContainer />
    </div>
  );
};

export default App;
