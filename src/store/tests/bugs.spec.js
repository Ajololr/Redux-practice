import { bugAdded } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  it("bugAdded", () => {
    const store = configureStore();
    store.dispatch(bugAdded({ description: "New bug" }));
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});
