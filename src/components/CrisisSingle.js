import React from "react";
import { connect } from "react-redux";
import { fetchSingleCrisis } from "../actions/CrisisActions";

class CrisisSingle extends React.Component {
  componentDidMount() {
    const id = this.props.reportID;
    this.props.dispatch(fetchSingleCrisis(id));
  }

  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = state => ({
  item: state.singleCrisis.item,
  loading: state.singleCrisis.loading,
  error: state.singleCrisis.error
});

export default connect(mapStateToProps)(CrisisSingle);
