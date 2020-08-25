import store from "./store";
import { bugAdded } from "./actions";

store.dispatch(bugAdded("New bug"));

console.log(store.getState());
