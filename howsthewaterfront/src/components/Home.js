import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Home Page {this.props.user.name}
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
