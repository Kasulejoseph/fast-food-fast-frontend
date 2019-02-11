import React from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../../actions/feactAction';
import SignUpForm from '../../components/SignupForm/SignupForm';
import NavBarAuth from '../../components/NavBar/NavBarAuth';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      location: '',
      role: 'user',
      collapse: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      role: this.state.role
    };
    const {history} = this.props
    this.props.registerAction(user, history);
  }
  render() {
    return ( <>
      <NavBarAuth onClick={this.onClick} isOpen ={this.state.collapse}/>,
      <SignUpForm onSubmit={this.onSubmit} onChange={this.onChange} />
      </>);
  }
}

export default connect(
  null,
  { registerAction }
)(SignUp);
