import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';


const routes = (
  <BrowserRouter>
<Switch>
<Route exact path="/" component={App}/>
<Route path="/Dashboard" component={Dashboard}/>
  
 </Switch> 
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
