import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { fetchSingleCrisis } from "../../actions/CrisisActions";

export class CrisisSingle extends React.Component {
  componentDidMount() {
    const id = this.props.reportID;
    this.props.dispatch(fetchSingleCrisis(id));
  }

  render() {
    const { item, loading, error } = this.props;
    let title = "";
    let date = "";
    let body = "";
    if (item.fields !== undefined) {
      title = item.fields.title;
      date = moment(item.fields.date).format("L");
      body = item.fields.body;
    }

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
        <h4 className="crisis-title">{title}</h4>
        <p className="crisis-date">{date}</p>
        <p className="crisis-body">{body}</p>
        <button onClick={this.props.donateClicked}>donate</button>
        <button onClick={this.props.cancelClicked}>cancel</button>
      </div>
    );
  }
}

CrisisSingle.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  item: state.singleCrisisReducer.item,
  loading: state.singleCrisisReducer.loading,
  error: state.singleCrisisReducer.error
});

export default connect(mapStateToProps)(CrisisSingle);
