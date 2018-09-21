import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecentCrisis } from "../../actions/CrisisActions";
import "../../styles/container.css";
import "../../styles/card.css";

class CrisisGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecentCrisis());
  }

  render() {
    const { items, loading, error } = this.props;
    const cards = items.map((item, index) => (
      <div className="crisis-card" key={index}>
        <p>{item.fields.title}</p>
        <button
          onClick={() => {
            this.props.readMoreClicked();
            this.props.handleID(item.id);
          }}
        >
          read more
        </button>
      </div>
    ));

    if (loading) {
      return (
        <div className="crisis-container">
          <i className="fas fa-spinner fa-spin" />
          Loading...
        </div>
      );
    }

    if (error) {
      return <div className="crisis-container">Error! {error.message}</div>;
    }

    return <div className="crisis-container">{cards}</div>;
  }
}

CrisisGrid.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  items: state.recentCrisisReducer.items,
  loading: state.recentCrisisReducer.loading,
  error: state.recentCrisisReducer.error
});

export default connect(mapStateToProps)(CrisisGrid);
