import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  
  receiveStock(stock) {
    AppDispatcher.dispatch({
      type: 'SEARCH_STOCK',
      payload: {stock}
    })

  },

  receiveDetails(details) {
    AppDispatcher.dispatch({
      type: 'GET_DETAILS',
      payload: {details}
    })
  }
}

export default ServerActions;