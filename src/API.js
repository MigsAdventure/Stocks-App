import jsonp from 'jsonp';
import ServerActions from './actions/ServerActions';

const API = {
  receiveStock(stock) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${stock}`,(err,data) => {
      ServerActions.receiveStock(data)
    })
  },

  getDetails(symbol) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, (err, data) => {
      ServerActions.receiveDetails(data)
    })
  }
}

export default API;