import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import JoinTeam from './components/JoinTeam';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateTeam from './components/CreateTeam';
import CreatePoll from './components/CreatePoll';
import Polls from './components/Polls';

function App() {
  return (
    <Router>
      <div className="App">


      <Switch>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
        <Route path="/SignIn">
          <SignIn/>
        </Route>
        <Route path="/joinTeam">
          <JoinTeam/>
        </Route>
        <Route path="/createTeam">
          <CreateTeam/>
        </Route>
        <Route path="/CreatePoll">
          <CreatePoll/>
        </Route>
        <Route path="/Polls">
          <Polls/>
        </Route>
        <Route path="/">
          <SignIn/>
        </Route>

      </Switch>



      </div>
    </Router>

  );
}

export default App;
