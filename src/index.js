import configureStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(projectAdded({ name: "My project" }));

console.log(store.getState());
