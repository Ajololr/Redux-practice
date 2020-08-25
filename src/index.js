import store from "./store";
import { bugAdded, bugResolved } from "./actions";

store.dispatch(bugAdded("New bug"));
store.dispatch(bugAdded("New bug"));
store.dispatch(bugAdded("New bug"));
store.dispatch(bugResolved(1));

console.log(store.getState());
