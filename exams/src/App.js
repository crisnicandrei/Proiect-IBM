import React from 'react';
import FormLogin from './components/FormLogin';
import { Switch, Route } from 'react-router-dom';

import PageProfesor from './components/pageProfesor';
import PageStudent from './components/pageStudent';
import PageAdmin from './components/pageAdmin';

function App() {
  return (
    <div className="App">


      <Switch >
        <Route path="/" exact component={FormLogin} />
        <Route path="/prof" exact component={PageProfesor} />
        <Route path="/stud" exact component={PageStudent} />
        <Route path="/admin" exact component={PageAdmin} />
      </Switch>
    </div>
  );
}

export default App;
