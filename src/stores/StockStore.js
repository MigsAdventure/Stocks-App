import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _results = [];

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
          console.log('DETAILS ',payload.details);
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

}

export default new StockStore();