let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === "bugResolved")
    return state.map((bug) => {
      if (bug.id === action.payload.id) {
        bug.resolved = true;
      }
      return bug;
    });

  return state;
}
