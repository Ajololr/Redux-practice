import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs = bugs.filter((bug) => bug.id !== action.payload.id);
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});

// export default function reducer(state = [], action) {
//   if (action.type === bugAdded.type)
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   else if (action.type === bugRemoved.type)
//     return state.filter((bug) => bug.id !== action.payload.id);
//   else if (action.type === bugResolved.type)
//     return state.map((bug) =>
//       bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//     );

//   return state;
// }
