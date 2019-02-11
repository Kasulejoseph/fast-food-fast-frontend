import React from 'react';
import Navbar from '../../components/NavBar/NavBarAuth'
class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    return(
      <Navbar onClick={this.onClick} isOpen ={this.state.collapse}/>
    );
  }
}

export default FixedNavbarExample;