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

import * as ROUTES from './components/Constants/routes'



function App() {
  return (
    <LoginProvider>
      <ExamsProvider>
        <div className="App">
          <Switch >
            <Route path={ROUTES.LOGIN} exact component={FormLogin} />
            <Route path={ROUTES.PROFHOME} exact component={PageProfesor} />
            <Route path={ROUTES.PROFCERERE} exact component={PageProfesor} />
            <Route path={ROUTES.STUDENTHOME}exact component={PageStudent} />
            <Route path={ROUTES.ADMINHOME} exact component={PageAdmin} />
            <Route path={ROUTES.ADMINUSERSLIST} exact component={PageAdmin} />
            <Route path={ROUTES.ADMINPENDING} exact component={PageAdmin} />
          </Switch>

        </div>
      </ExamsProvider>
    </LoginProvider>
  );
}

export default App;
