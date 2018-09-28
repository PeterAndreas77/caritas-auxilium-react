import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/UserActions";

export class AccountGrid extends React.Component {
  componentDidMount() {
    const username = localStorage.getItem("loggedInUser");
    this.props.dispatch(fetchUser(username));
  }

  render() {
    const { item, loading, error } = this.props;

    if (loading) {
      return (
        <div className="account-container">
          <i className="fas fa-spinner fa-spin" />
          Loading...
        </div>
      );
    }

    if (error) {
      return <div className="account-container">Error! {error.message}</div>;
    }

    return (
      <div className="account-container">
        <div className="account-card">
          <h4>Your Account</h4>
          <p>First Name: {item.firstname}</p>
          <p>Last Name: {item.lastname}</p>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
          <button onClick={this.props.updateClicked}>update</button>
        </div>
      </div>
    );
  }
}

AccountGrid.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object
};

const mapStateToProps = state => ({
  item: state.userReducer.item,
  loading: state.userReducer.loading,
  error: state.userReducer.error
});

export default connect(mapStateToProps)(AccountGrid);
