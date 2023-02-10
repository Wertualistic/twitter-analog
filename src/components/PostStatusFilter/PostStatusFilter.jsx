import React from "react";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "All" },
      { name: "like", label: "Liked" },
      { name: "important", label: "Important" },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn btn-info' : 'btn btn-outline-secondary'
      return (
        <>
          <button key={name} className={clazz} type="button" onClick={() => this.props.onFilterSelect(name)}>{label}</button>
        </>
      );
    });
    return (
      <div className="btn-group" role="group">
        {buttons}
      </div>
    );
  }
}
