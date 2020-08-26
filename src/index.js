import configureStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";

const store = configureStore();

store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());
