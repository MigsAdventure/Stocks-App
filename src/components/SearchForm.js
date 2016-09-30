import React, {Component} from 'react';
import {Link} from "react-router";
import StockActions from '../actions/StockActions';

export default class SearchForm extends Component {
  constructor() {
    super();
  }


  componentWillUnmount() {
    let stock = this.refs.searchInput.value;
    StockActions.searchStock(stock);
  }

  render() {
    return (
      <div>
     <form>
       <div className="row inputContainer">
          <input ref="searchInput" type="text" />
          <Link to='/ResultsTable' className="btn btn-primary" id="searchBtn" type="button">Search</Link>
       </div>
     </form>
     </div>
      )
  }
}