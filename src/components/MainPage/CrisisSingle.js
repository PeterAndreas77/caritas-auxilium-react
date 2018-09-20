import React from "react";
import { connect } from "react-redux";
import { fetchSingleCrisis } from "../../actions/CrisisActions";

class CrisisSingle extends React.Component {
  componentDidMount() {
    const id = this.props.reportID;
    this.props.dispatch(fetchSingleCrisis(id));
  }

  render() {
    const { item, loading, error } = this.props;

    if (loading) {
      return (
        <div className="single-crisis">
          <i className="fas fa-spinner fa-spin" />
          Loading...
        </div>
      );
    }

    if (error) {
      return <div className="single-crisis">Error! {error.message}</div>;
    }

    return (
      <div className="single-crisis">
        <h4 className="crisis-title">{item}</h4>
        <p className="crisis-date">date</p>
        <div>Lorem Ipsum</div>
        <button onClick={this.props.donateClicked}>donate</button>
        <button onClick={this.props.cancelClicked}>cancel</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.singleCrisisReducer.item,
  loading: state.singleCrisisReducer.loading,
  error: state.singleCrisisReducer.error
});

export default connect(mapStateToProps)(CrisisSingle);
