import './App.css';
import React, { Component } from 'react'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import News from './news'
import Sentimentanalysis from './sentimentanalysis'
import Nlp from "./nlp";
import 'bootstrap/dist/css/bootstrap.min.css' 
import SearchPage from './SearchPage';


class App extends Component {
  


render() {
  return (
    <HashRouter>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
          <a class="navbar-brand" href="#">ACHRAF BATTIWA</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
        
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

      <div class="navbar-nav">
        <NavLink class="nav-link active" aria-current="page" exact  to="/">News</NavLink>
        
        <NavLink class="nav-link" to="/sentimentanalysis">Analyse de sentiment</NavLink>
        <NavLink class="nav-link" to="/searchpage">Search</NavLink>
        <NavLink class="nav-link" to="/nlp">NLP</NavLink>
      </div>
      </div>
    </div>
    
          </nav>
          <div className="content">
          <Route  exact path="/" component={News}/>
          <Route path="/sentimentanalysis" component={Sentimentanalysis}/>
          <Route path="/searchpage" component={SearchPage}/>
          <Route   path="/nlp" component={Nlp}/>
      </div>
      
      
          </HashRouter>


  );  
}

}
export default App;
