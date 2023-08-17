import { createStore, combineReducers} from 'redux';
import Info from './reducers/Reducer';
 
const rootReducer = combineReducers({
  data: Info,
});
 
export const store = createStore(rootReducer);