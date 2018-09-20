import React from "react";
import DonationSearch from "./DonationSearch";
import DonationGrid from "./DonationGrid";
import DonationUpdateForm from "./DonationUpdateForm";

class DonationPage extends React.Component {
  constructor() {
    super();
    this.state = { gridShown: true, updateFormShown: false };
    this.showGrid = this.showGrid.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);
  }

  showGrid() {
    this.setState({ gridShown: true, updateFormShown: false });
  }
  showUpdateForm() {
    this.setState({ gridShown: false, updateFormShown: true });
  }

  render() {
    if (this.state.gridShown) {
      return (
        <section className="my-donation">
          <DonationSearch searchClicked={this.showGrid} />
          <DonationGrid updateClicked={this.showUpdateForm} />
        </section>
      );
    }
    if (this.state.updateFormShown) {
      return (
        <section className="my-donation">
          <DonationSearch searchClicked={this.showGrid} />
          <DonationUpdateForm cancelClicked={this.showGrid} />
        </section>
      );
    }
  }
}

export default DonationPage;
