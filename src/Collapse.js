import React, { Component } from "react";

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      closed_styles: {
        maxHeight: "0",
        opacity: 0,
        transition: "0.3 all ease-out"
      },
      open_styles: {
        maxHeight: "100px",
        opacity: 1,
        transition: "0.3 all ease-out"
      }
    };
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.props.title}</p>
          <span
            onClick={() => {
              this.setState({ collapse: !this.state.collapse });
            }}
          >
            {this.state.collapse ? "more..." : "...less"}
          </span>
          {this.props.children(
            this.state.collapse
              ? this.state.closed_styles
              : this.state.open_styles
          )}
        </div>
      </div>
    );
  }
}

export default Collapse;
