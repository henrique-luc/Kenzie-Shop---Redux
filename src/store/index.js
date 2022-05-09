import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import CartReducer from "./modules/Cart/reducer";
import ProductsReducer from "./modules/Products/reducer";

const reducers = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
