import React, { Component } from 'react'
import {Link} from 'react-router'


export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container mainContainer'>
        <h1 className='text-center'>Stock Trader</h1>
        <Link to='/ResultsTable'></Link>
        <Link to='/SearchForm'></Link>
        <Link to='/StockDetails'></Link>
          {this.props.children}
      </div>
    )
  }
}
