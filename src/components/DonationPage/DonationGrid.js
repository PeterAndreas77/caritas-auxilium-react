import React from "react";
import { connect } from "react-redux";
import { fetchDonation } from "../../actions/DonationActions";

class DonationGrid extends React.Component {
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
          Confirmation #:
          {item.confNum}
        </p>
        <p>
          $<strong>{item.amount}</strong> to ${item.charity}
        </p>
        <button
          onClick={() => {
            this.props.updateClicked();
            this.props.handleID(item.id);
          }}
        >
          update
        </button>
        <button>delete</button>
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

const mapStateToProps = state => ({
  items: state.donationReducer.items,
  loading: state.donationReducer.loading,
  error: state.donationReducer.error
});

export default connect(mapStateToProps)(DonationGrid);
