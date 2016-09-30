import API from '../API';

const StockActions = {
  searchStock(stock) {
    API.receiveStock(stock);
  },

  getDetails(symbol) {
    API.getDetails(symbol);
  }
}

export default StockActions;