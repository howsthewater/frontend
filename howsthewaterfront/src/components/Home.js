import React from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchResult />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(
    `APP :: MAP STATE TO PROPS :: state value is ${JSON.stringify(state)}`
  );
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
