import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = [];
let _details = '';
class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      let {type,payload} = action
      switch(type) {
        case 'SEARCH_STOCK' :
          _results = [];
          payload.stock.map(stock => {
            _results.push({
              symbol: stock.Symbol,
              name: stock.Name,
              exchange: stock.Exchange
            })
          })
          this.emit('CHANGE')
          break;
        case 'GET_DETAILS' :
        let d = payload.details;
          _details = {
              status: d.Status,
              name:  d.Name,
              symbol: d.Symbol,
              lastPrice:  d.LastPrice,
              change: d.Change,
              timeStamp: d.Timestamp,
              changeYTD: d.ChangeYTD,
              High: d.High,
              Low: d.Low,
              Open: d.Open
            }
        
          this.emit('CHANGE')
          break;

      } 
    })
  } //end of constructor

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb) 
  }

  getAll() {
    return _results;
  }

  getDetail() {
    return _details
  }

}

export default new StockStore();