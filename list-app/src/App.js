import React from "react";
import './App.css';
import ListPage from "./components/ListPage";
import DetailsPage from "./components/DetailsPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewRecordForm from './components/NewRecordForm';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ListPage />
            </Route>

            <Route path="/detailspage">
              <DetailsPage />
            </Route>

            <Route path="/newrecordform">
              <NewRecordForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
