import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import './App.css';
import ListMainComponent from './components/listView/listMainComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <ListMainComponent></ListMainComponent>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
