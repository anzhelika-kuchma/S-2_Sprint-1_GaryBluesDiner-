import { Component } from "react";

class MenuOpt extends Component {
  constructor(props) {
    // this takes in properties (props) from outside (title, desc) so we can use them in the component below
    super(props);

    this.state = {
      // Set State for each Menu Option to isExpanded: false
      isExpanded: false,
    };
  }

  toggleExpansion = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
    console.log(this.state.isExpanded);
  };

  render() {
    const divStyle = {
      height: this.props.isExpanded ? "120px" : "auto",
      overflow: "hidden",
      transition: "height 0.5s",
    };
    return (
      <>
        <div
          className="menu-option"
          style={divStyle}
          onClick={this.toggleExpansion}
        >
          {this.props.title}
          {this.state.isExpanded && <p className="desc">{this.props.desc}</p>}
        </div>
      </>
    );
  }
}

export default MenuOpt;
