import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/dCandidate";

const DCandidates = props => {
  return <div>from DCandidates</div>;
};

const mapStateToProps = state => {
  return {
    dCandidateList: state.dCandidate.list
  };
};

const mapActionToPros = {
  fetchAllDCandidates: actions.fetch_all
};

export default connect(mapStateToProps)(DCandidates);
