import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bugAdded } from "../store/bugs";

function BugsList() {
  const dispatch = useDispatch();
  const bugs = useSelector((store) => store.entities.bugs.list);

  useEffect(() => {
    dispatch(bugAdded({ description: "Another bug" }));
    dispatch(bugAdded({ description: "Another bug" }));
    dispatch(bugAdded({ description: "Another bug" }));
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
}

export default BugsList;
