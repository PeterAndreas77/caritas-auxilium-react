import React from "react";
import { connect } from "react-redux";
import AccountGrid from "./AccountGrid";
import AccountUpdateForm from "./AccountUpdateForm";
import { updateUser } from "../../actions/UserActions";

class AccountPage extends React.Component {
  constructor() {
    super();
    this.state = { gridShown: true, updateFormShown: false };
    this.showGrid = this.showGrid.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
  }

  submit = values => {
    const username = localStorage.getItem("loggedInUser");
    values.username = username;
    this.props.dispatch(updateUser(username, values));
  };

  showGrid() {
    this.setState({ gridShown: true, updateFormShown: false });
  }
  showUpdateForm() {
    this.setState({ gridShown: false, updateFormShown: true });
  }

  render() {
    if (this.state.gridShown) {
      return (
        <section className="my-account">
          <AccountGrid updateClicked={this.showUpdateForm} />
        </section>
      );
    }
    if (this.state.updateFormShown) {
      return (
        <section className="my-account">
          <AccountUpdateForm
            onSubmit={this.submit}
            cancelClicked={this.showGrid}
          />
        </section>
      );
    }
  }
}

export default connect()(AccountPage);
