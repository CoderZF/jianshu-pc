import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Write = props => {
  const { loginStatus } = props;
  if (loginStatus) {
    return <div>写文章页面</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
