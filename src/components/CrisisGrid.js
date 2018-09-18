import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecentCrisis } from "../actions/CrisisActions";
import CrisisSingle from "./CrisisSingle";
import "../styles/container.css";
import "../styles/card.css";

class CrisisGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reading: false, reportID: "" };
  }

  componentDidMount() {
    this.props.dispatch(fetchRecentCrisis());
  }

  handleID = e => {
    const id = e.target.getAttribute("report-id");
    this.setState({ reportID: id });
  };

  setReading(reading) {
    this.setState({ reading });
  }

  render() {
    const { items, loading, error } = this.props;
    const cards = items.map((item, index) => (
      <div className="crisis-card" key={index}>
        <p>{item.fields.title}</p>
        <p
          className="button"
          report-id={item.id}
          onClick={e => {
            this.setReading(true);
            this.handleID(e);
          }}
        >
          read more
        </p>
      </div>
    ));

    if (loading) {
      return <div className="crisis-container">Loading...</div>;
    }

    if (error) {
      return <div className="crisis-container">Error! {error.message}</div>;
    }

    if (this.state.reading === true) {
      return (
        <div className="crisis-container">
          <CrisisSingle reportID={this.state.reportID} />
        </div>
      );
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
  items: state.recentCrisis.items,
  loading: state.recentCrisis.loading,
  error: state.recentCrisis.error
});

export default connect(mapStateToProps)(CrisisGrid);
