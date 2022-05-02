import React, { Fragment } from 'react';
import './App.css';

//Components
import InputEtude from './components/CreateEtude';
import ListEtudes from './components/ListEtudes';

function App() {
  console.log(React.version)
  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4 text-center mt-5">Trombone Etude DB</h1>

        <InputEtude />
        <ListEtudes />
      </div>
    </Fragment>
  );
}

export default App;
