import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import {Container} from "@material-ui/core";
import CreateEvent from "./components/pages/CreateEvent";

import './App.css';
import LoginPage from "./components/pages/LoginPage";
import Signup from "./components/Signup";
import NewEvent from "./components/NewEvent";
import Login from "./components/Login";
import EventsPage from "./components/pages/EventsPage";
import SignupPage from "./components/pages/SignupPage";

function App() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Router> 
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/CreateEvent" component={CreateEvent} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Signup" component={SignupPage} />
          <Route exact path="/NewEvent" component={NewEvent} />
          <Route exact path="/Events" component={EventsPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Container>
    
  );
}

export default App;
