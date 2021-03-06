import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDonation } from "../../actions/DonationActions";

export class DonationGrid extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDonation());
  }

  render() {
    const { items, loading, error } = this.props;
    const cards = items.map((item, index) => (
      <div className="donation-card" key={index}>
        <h4>{item.title}</h4>
        <p>
          Created:
          {item.created}
        </p>
        <p>
          $ <strong>{item.amount}</strong> to {item.charity}
        </p>
        <p>
          Confirmation Number:
          <strong>( {item.confNum} )</strong>
        </p>
        <button
          onClick={() => {
            this.props.updateClicked();
            this.props.handleID(item.id);
          }}
        >
          update
        </button>
        <button onClick={() => this.props.deleteClicked(item.id)}>
          delete
        </button>
      </div>
    ));

    if (loading) {
      return (
        <div className="donation-container">
          <i className="fas fa-spinner fa-spin" />
          Loading...
        </div>
      );
    }

    if (error) {
      return <div className="donation-container">Error! {error.message}</div>;
    }

    return <div className="donation-container">{cards}</div>;
  }
}

DonationGrid.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  items: state.donationReducer.items,
  loading: state.donationReducer.loading,
  error: state.donationReducer.error
});

export default connect(mapStateToProps)(DonationGrid);
