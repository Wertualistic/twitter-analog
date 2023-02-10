import React, { Component } from "react";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUptadeSearch = this.onUptadeSearch.bind(this);
  }

  onUptadeSearch(e) {
    const term = e.target.value;
    this.setState({term: term})
    this.props.onUptadeSearch(term)
  }

  render() {
    return (
      <div className="w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Posts"
          onChange={this.onUptadeSearch}
        />
      </div>
    );
  }
}
