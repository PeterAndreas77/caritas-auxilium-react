import React from "react";
import CrisisGrid from "./CrisisGrid";
import CrisisSearch from "./CrisisSearch";
import CrisisSingle from "./CrisisSingle";
import CrisisDonateForm from "./CrisisDonateForm";
import "../../styles/main.css";

class CrisisPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gridShown: true,
      readMoreShown: false,
      donateFormShown: false,
      reportID: ""
    };
    this.showGrid = this.showGrid.bind(this);
    this.showReadMore = this.showReadMore.bind(this);
    this.showDonateForm = this.showDonateForm.bind(this);
    this.idCatcher = this.idCatcher.bind(this);
  }

  submit = values => {
    console.log(values);
  };

  showGrid() {
    this.setState({
      gridShown: true,
      readMoreShown: false,
      donateFormShown: false
    });
  }
  showReadMore() {
    this.setState({
      readMoreShown: true,
      gridShown: false,
      donateFormShown: false
    });
  }
  showDonateForm() {
    this.setState({
      donateFormShown: true,
      gridShown: false,
      readMoreShown: false
    });
  }
  idCatcher(id) {
    this.setState({ reportID: id });
  }

  render() {
    if (this.state.gridShown) {
      return (
        <section className="recent-crisis">
          <CrisisSearch searchClicked={this.showGrid} />
          <CrisisGrid
            readMoreClicked={this.showReadMore}
            handleID={this.idCatcher}
          />
        </section>
      );
    }
    if (this.state.readMoreShown) {
      return (
        <section className="recent-crisis">
          <CrisisSearch searchClicked={this.showGrid} />
          <CrisisSingle
            reportID={this.state.reportID}
            donateClicked={this.showDonateForm}
            cancelClicked={this.showGrid}
          />
        </section>
      );
    }
    if (this.state.donateFormShown) {
      return (
        <section className="recent-crisis">
          <CrisisSearch searchClicked={this.showGrid} />
          <CrisisDonateForm
            onSubmit={this.submit}
            cancelClicked={this.showGrid}
          />
        </section>
      );
    }
  }
}

export default CrisisPage;
