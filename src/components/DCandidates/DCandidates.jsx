import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/dCandidate";

const DCandidates = props => {
  useEffect(() => {
    props.fetchAllDCandidates();
  }, []);

  return <div>from DCandidates</div>;
};

const mapStateToProps = state => {
  return {
    dCandidateList: state.dCandidate.list
  };
};

const mapActionToPros = {
  fetchAllDCandidates: actions.fetchAll
};

export default connect(mapStateToProps, mapActionToPros)(DCandidates);
