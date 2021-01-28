import { combineReducers } from "redux"
import products from './ListProductReducer'
import itemEditing from './productEditting'
 const appReducers =combineReducers({
    products,
    itemEditing
});
export default appReducers;