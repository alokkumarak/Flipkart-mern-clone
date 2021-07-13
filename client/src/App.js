import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/HomeComponent/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { TemplateProvider } from './template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/DetailView';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
      <Router>
         <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='/product/:id' component={DetailView} exact/>
         
        </Switch>
     </Router>
     </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
