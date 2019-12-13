import React from "react";
import "./NavSelector.css";
class NavSelector extends React.Component {
  render() {
    return (
      <div className="NavSelector">
        <ul>
          <li>
            <span
              onClick={() =>
                this.props.onClickHandler(1, this.props.sectionsid)
              }
            />
          </li>
          <li>
            <span
              onClick={() =>
                this.props.onClickHandler(2, this.props.sectionsid)
              }
            />
          </li>
          <li>
            <span
              onClick={() =>
                this.props.onClickHandler(3, this.props.sectionsid)
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default NavSelector;
