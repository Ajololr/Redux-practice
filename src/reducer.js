let lastId = 0;

function (state, action) {
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      }
    ]
  else if (action.type === "bugRemoved")
    return state.bugs.filter(bug => bug.id !== action.payload.id)

  return state;
}