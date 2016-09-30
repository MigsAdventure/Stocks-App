import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Layout from './components/Layout'
import SearchForm from './components/SearchForm'
import ResultsTable from './components/ResultsTable' 
import StockStore from './stores/StockStore'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute   component={SearchForm}></IndexRoute>
      <Route path='/ResultsTable' component={ResultsTable}></Route>
    </Route>
  </Router>
,document.getElementById('root')
);
