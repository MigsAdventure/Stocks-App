import React, {Component} from 'react';
import StockStore from '../stores/StockStore';
import StockActions from '../actions/StockActions';


export default class ResultsTable extends Component {
  constructor (){
    super();

    this.state = {
      results: StockStore.getAll()
    }

  this._onChange = this._onChange.bind(this);
  this.stockDetails = this.stockDetails.bind(this);

  } //end of constructor

  componentWillMount() {
    StockStore.startListening(this._onChange)
    this.state = {
      results: StockStore.getAll()
    }
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      results: StockStore.getAll()
    })
    console.log('change', this.state.results)
  }

  stockDetails(e) {
    StockActions.getDetails(e);
  }

  render() {
    let {results} = this.state || [];
    console.log('table state: ', results)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((stock,i) => (
              <tr  onClick={this.stockDetails.bind(this, stock.symbol)} key={i} id={i}>
                <td className="col-xs-4" >{stock.symbol}</td>
                <td className="col-xs-4" >{stock.name}</td>
                <td className="col-xs-4" >{stock.exchange}</td>
              </tr>
            ))//end of map
          }
        </tbody>
      </table>
      )//end of render return
  }
}