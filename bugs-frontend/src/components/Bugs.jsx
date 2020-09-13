import React, { Component } from "react";
import { connect } from "react-redux";
import { bugAdded } from "../store/bugs";

class Bugs extends Component {
  componentDidMount() {
    this.props.bugAdded({ description: "First bug" });
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProprs = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
  bugAdded: (payload) => dispatch(bugAdded(payload)),
});

// Container
// Presentation (Bugs)

export default connect(mapStateToProprs, mapDispatchToProps)(Bugs);
