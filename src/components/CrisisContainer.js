import React from "react";
import { connect } from "react-redux";
import { fetchRecentCrisis } from "../actions/CrisisActions";
import "../styles/container.css";
import "../styles/card.css";

class CrisisContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecentCrisis());
  }

  render() {
    const { items, loading, error } = this.props;
    const cards = items.map((item, index) => (
      <div className="donation-card" key={index} reportid={item.id}>
        <p>{item.fields.title}</p>
        <p className="read-more button">read more</p>
      </div>
    ));
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    return <div className="crisis-container">{cards}</div>;
  }
}

const mapStateToProps = state => ({
  items: state.recentCrisisItems,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(CrisisContainer);
