import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions/feactAction";
import LoginForm from "../../components/LoginForm/LoginForm";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "user"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {    
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role
    };
    this.props.loginAction(user);
  }

  render() {
    return <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default connect(
  null,
  { loginAction }
)(LogIn);
