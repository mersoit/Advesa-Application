import React from "react";
import "./App.css";
import PrintSections from "./PrintSections";
import NavSelector from "./NavSelector";
import TopLogo from "./TopLogo";
import "./Transitioner.css";

let loading = false;
class Transitioner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toplogowhitening: false,
      hover: false,
      sections: {
        id: 1,
        previd: 0
      }
    };
  }
  componentDidMount() {
    if (this.state.sections.id === 1 && this.state.toplogowhitening === false) {
      this.setState({ toplogowhitening: true });
    }
  }
  componentDidUpdate() {
    if (this.state.sections.id === 1 && this.state.toplogowhitening === false) {
      this.setState({ toplogowhitening: true });
    } else if (
      this.state.toplogowhitening === true &&
      this.state.sections.id !== 1
    ) {
      this.setState({ toplogowhitening: false });
    }
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover);
  };
  onClickHandler = (sid, prevsid) => {
    if (!loading) {
      loading = true;
      this.setState({ sections: { id: sid, previd: prevsid } });
      console.log(sid + " " + prevsid);
      setTimeout(function() {
        loading = false;
      }, 1000);
    }
  };
  onWheelHandler = e => {
    if (e.deltaY > 0 && this.state.sections.id < 3 && !loading) {
      this.onClickHandler(this.state.sections.id + 1, this.state.sections.id);
      loading = true;
      setTimeout(function() {
        loading = false;
      }, 1000);
    }
    if (e.deltaY < 0 && this.state.sections.id > 1 && !loading) {
      this.onClickHandler(this.state.sections.id - 1, this.state.sections.id);
      loading = true;
      setTimeout(function() {
        loading = false;
      }, 1000);
    }
  };
  render() {
    return (
      <div className="Transitioner" onWheel={e => this.onWheelHandler(e)}>
        <TopLogo whitening={this.state.toplogowhitening} />
        <PrintSections
          sectionsid={this.state.sections.id}
          stylechangeid={this.state.sections.previd}
          toggleHover={this.toggleHover}
          hover={this.state.hover}
        />
        <NavSelector
          onClickHandler={this.onClickHandler}
          sectionsid={this.state.sections.id}
        />
      </div>
    );
  }
}
export default Transitioner;
