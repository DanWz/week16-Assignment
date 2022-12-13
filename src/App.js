import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';
import { data } from 'jquery';
import { type } from '@testing-library/user-event/dist/type';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import FAQ from './FAQ';
import ViewRecord from './ViewRecord';
import AddVehicle from './AddVehicle';


function App() {
const ENDPOINT = 'https://6375c99d7e93bcb006b9b0ae.mockapi.io/api/v1/studentCars';

  console.log('generated in App.js');
  //console.log(res[0].name);
  return (
    <div>
      <Container>
        <Router>
        <Navbar />
          <div className="App">
            <header className="App-header">
              <div>
                <Switch>
                  <Route exact path="/FAQ" >
                    <FAQ />
                  </Route>
                  <Route exact path="/newRecord" >
                    <Create url={ENDPOINT}/>
                  </Route>
                  <Route exact path="/record/:id" >
                    <ViewRecord url={ENDPOINT}/>
                  </Route>
                  <Route exact path="/update/:id" >
                    <AddVehicle url={ENDPOINT} />
                  </Route>
                  <Route exact path="/" >
                    <Home url={ENDPOINT} />
                  </Route>
                </Switch>
              </div>
            </header>
          </div>
        </Router>
      </Container>
    </div>
  );
};


export default App;