import React from 'react';
import { connect } from 'react-redux';
import { registerAction} from '../actions/fetchAction'
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            location: '',
            role: 'user'
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }
onChange(e){
this.setState({[e.target.name]: e.target.value})
}
onSubmit(e){
    e.preventDefault();
    const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        location: this.state.location,
        role: this.state.role
    };
    this.props.registerAction(user)
}
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                <h1>SignUp</h1>
                <div>
                <label>Username: </label> <input type='text' name='username' onChange={this.onChange}/><br/>
                </div>
                <div>
                <label>Email: </label> <input type='email' name='email' onChange={this.onChange}/><br/>
                </div>
                <div>
                <label>Password: </label> <input type='password' name='password' onChange={this.onChange}/><br/>
                </div>
                <div>
                <label>Location: </label> <input type='text' name='location' onChange={this.onChange}/><br/>
                </div>
                <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect (
    null,
    {registerAction}
) (SignUp);

