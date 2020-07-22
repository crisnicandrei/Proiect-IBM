import React from 'react';
import FormLogin from './components/FormLogin';
import { Switch, Route } from 'react-router-dom';

import PageProfesor from './components/professor/pageProfesor';
import PageStudent from './components/student/pageStudent';
import PageAdmin from './components/admin/pageAdmin';



function App() {
  return (
    <div className="App">


      <Switch >
        <Route path="/" exact component={FormLogin} />
        <Route path="/prof/home" exact component={PageProfesor} />
        <Route path="/prof/cerere" exact component={PageProfesor} />
        <Route path="/stud/home" exact component={PageStudent} />
        <Route path="/admin/home" exact component={PageAdmin} />
      </Switch>
    </div>
  );
}

export default App;
