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
      <div id="details">
        <div className="row">
          <h2 className="col-xs-6">{`Name: ${details.name}`}</h2>
          <h2 className="col-xs-6">{`Symbol: ${details.symbol}`}</h2>
        </div>
        <div className="row">
          <h2 className="col-xs-6">{`LastPrice: $${details.lastPrice}`}</h2>
          <h2 className="col-xs-6">{`Change: $${details.change}`}</h2>
        </div>
        <div className="row">
          <h2 className="col-xs-6">{`High: $${details.High}`}</h2>
          <h2 className="col-xs-6">{`Low: $${details.Low}`}</h2>
        </div>
        <div className="row">
          <h2 className="col-xs-6">{`Status: ${details.status}`}</h2>
          <h2 className="col-xs-6">{`Time Stamp: ${details.timeStamp}`}</h2>
        </div>
        <div className="row">
          <h2 className="col-xs-6">{`Open: ${details.Open}`}</h2>
          <h2 className="col-xs-6">{`Change YTD: ${details.changeYTD}`}</h2>
        </div>
      </div>
      )
    }
  }


