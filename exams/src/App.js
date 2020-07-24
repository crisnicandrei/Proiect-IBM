import React from 'react';

//Import router-dom
import { Switch, Route } from 'react-router-dom';

//Import components
import FormLogin from './components/FormLogin';
import PageProfesor from './components/professor/pageProfesor';
import PageStudent from './components/student/pageStudent';
import PageAdmin from './components/admin/pageAdmin';
import { StudentProvider } from './components/StudentContext';




function App() {
  return (
    <StudentProvider>
      <div className="App">
        <Switch >
          <Route path="/" exact component={FormLogin} />
          <Route path="/prof/home" exact component={PageProfesor} />
          <Route path="/prof/cerere" exact component={PageProfesor} />
          <Route path="/stud/home" exact component={PageStudent} />
          <Route path="/admin/home" exact component={PageAdmin} />
        </Switch>

      </div>
    </StudentProvider>
  );
}

export default App;
