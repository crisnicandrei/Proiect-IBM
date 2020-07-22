import React from 'react';
import FormLogin from './components/FormLogin';
import { Switch, Route } from 'react-router-dom';

import PageProfesor from './components/pageProfesor';
import PageStudent from './components/pageStudent';
import PageAdmin from './components/pageAdmin';
import FormProfessor from './components/FormProfessor'


function App() {
  return (
    <div className="App">


      {/* <Switch >
        <Route path="/" exact component={FormLogin} />
        <Route path="/prof" exact component={PageProfesor} />
        <Route path="/stud/home" exact component={PageStudent} />
        <Route path="/admin" exact component={PageAdmin} />
      </Switch> */}
      <FormProfessor />
    </div>
  );
}

export default App;
