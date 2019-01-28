import React from 'react';
import { connect } from 'react-redux';
import { registerAction} from '../../actions/fetchAction'
import SignUpForm from '../../components/SignupForm/SignupForm'

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
            <SignUpForm />
        );
    }
}

export default connect (
    null,
    {registerAction}
) (SignUp);
