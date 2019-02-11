import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/feactAction';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBarAuth from '../../components/NavBar/NavBarAuth';

export class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: 'user',
      collapse: false,
      active: 'active'
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
        collapse: !this.state.collapse, active: 'de-active'
      });

  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
    };
    const { history } = this.props;
    this.props.loginAction(user, history);
  }

  render() {
    return (
      <>
      <NavBarAuth onClick={this.onClick} isOpen ={this.state.collapse} active={this.state.active}/>,
      <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(
  null,
  { loginAction }
)(LogIn);
