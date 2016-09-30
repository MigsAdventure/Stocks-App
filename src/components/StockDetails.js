import React, {Component} from 'react';
import StockActions from '../actions/StockActions';
import StockStore from '../stores/StockStore';

export default class StockDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: StockStore.getDetail()
    }

    this._onChange = this._onChange.bind(this);
  }//end of constructor


  ComponentWillMount() {
    StockStore.startListening(this._onChange)
  }

  ComponentWillUnmount() {
    StockStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      details: StockStore.getDetail()
    })
  }

  refresh() {

  }



  render() {
    let {details} = this.state;
    console.log('state details: ', details )
    return (
      <div>
        
      </div>
      )
    }
  }


