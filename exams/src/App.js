import React from 'react';

//Import router-dom
import { Switch, Route } from 'react-router-dom';

//Import components
import FormLogin from './components/FormLogin';
import PageProfesor from './components/professor/pageProfesor';
import PageStudent from './components/student/pageStudent';
import PageAdmin from './components/admin/pageAdmin';
//Import Contexts
import { ExamsProvider } from './components/ExamsContext';
import { LoginProvider } from './components/LoginContext';



function App() {
  return (
    <LoginProvider>
      <ExamsProvider>
        <div className="App">
          <Switch >
            <Route path="/" exact component={FormLogin} />
            <Route path="/prof/home" exact component={PageProfesor} />
            <Route path="/prof/cerere" exact component={PageProfesor} />
            <Route path="/stud/home" exact component={PageStudent} />
            <Route path="/admin/home" exact component={PageAdmin} />
            <Route path="/admin/userslist" exact component={PageAdmin} />
            <Route path="/admin/pend" exact component={PageAdmin} />
          </Switch>

        </div>
      </ExamsProvider>
    </LoginProvider>
  );
}

export default App;
