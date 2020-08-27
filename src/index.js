import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, assignToUser, getUserBugs } from "./store/bugs";
import { userAdded } from "./store/users";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(userAdded({ name: "Ilya" }));
store.dispatch(userAdded({ name: "Alex" }));
store.dispatch(userAdded({ name: "Maxim" }));

store.dispatch(assignToUser({ id: 1, userId: 1 }));
store.dispatch(assignToUser({ id: 2, userId: 1 }));

store.dispatch(projectAdded({ name: "My project" }));

console.log(getUserBugs(2)(store.getState()));
