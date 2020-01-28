import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reducer from './app.reducer';

const rootReducer = (history) => combineReducers({
  application: reducer,
  router: connectRouter(history)
})

export default rootReducer;