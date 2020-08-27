import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      bugs = bugs.filter((bug) => bug.id !== action.payload.id);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    assignToUser: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].userId = action.payload.userId;
    },
  },
});

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  assignToUser,
} = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = createSelector(
  (store) => store.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getUserBugs = (userId) =>
  createSelector(
    (store) => store.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId == userId)
  );
