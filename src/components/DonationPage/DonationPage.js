import React from "react";
import { connect } from "react-redux";
import DonationSearch from "./DonationSearch";
import DonationGrid from "./DonationGrid";
import DonationUpdateForm from "./DonationUpdateForm";
import { updateDonation } from "../../actions/DonationActions";

class DonationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridShown: true, updateFormShown: false, donationID: "" };
    this.showGrid = this.showGrid.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
    this.idCatcher = this.idCatcher.bind(this);
  }

  submit = values => {
    // changethis
    const id = this.state.donationID;
    values.id = id;
    this.props.dispatch(updateDonation(values, id));
  };

  showGrid() {
    this.setState({ gridShown: true, updateFormShown: false });
  }
  showUpdateForm() {
    this.setState({ gridShown: false, updateFormShown: true });
  }

  idCatcher(id) {
    this.setState({ donationID: id });
  }

  render() {
    if (this.state.gridShown) {
      return (
        <section className="my-donation">
          <DonationSearch searchClicked={this.showGrid} />
          <DonationGrid
            updateClicked={this.showUpdateForm}
            handleID={this.idCatcher}
          />
        </section>
      );
    }

    if (this.state.updateFormShown) {
      return (
        <section className="my-donation">
          <DonationSearch searchClicked={this.showGrid} />
          <DonationUpdateForm
            onSubmit={this.submit}
            cancelClicked={this.showGrid}
          />
        </section>
      );
    }
  }
}

export default connect()(DonationPage);
