import React, { Component } from "react";

export default function Loading(WrappedComponent) {
  return class extends Component {
    render() {
      return <div>{this.props.loading ? "loading..." : <WrappedComponent {...this.props}/>}</div>;
    }
  };
}
