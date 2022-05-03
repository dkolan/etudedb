import React, { Fragment } from 'react';
import './App.css';

//Components
import CreateEtude from './components/CreateEtude';
import ListEtudes from './components/ListEtudes';

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4 text-center mt-5">Trombone Etude DB</h1>

        <CreateEtude />
        <ListEtudes />
      </div>
    </Fragment>
  );
}

export default App;
