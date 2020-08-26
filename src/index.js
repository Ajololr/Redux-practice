import configureStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";

const store = configureStore();

store.dispatch(bugAdded("New bug"));
store.dispatch(bugAdded("New bug"));
store.dispatch(bugAdded("New bug"));
store.dispatch(bugResolved(1));

console.log(store.getState());
