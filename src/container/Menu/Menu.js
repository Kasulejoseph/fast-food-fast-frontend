import React from 'react';
import {connect} from 'react-redux'
import {myMenu} from '../../actions/feactAction'
import PostForm from '../../components/PostForm/PostForm'
class Postmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: '',
            description: '',
            price: '',
            image: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const menu = {
            meal: this.state.meal,
            description: this.state.description,
            price: Number(this.state.price),
            image: 'image.jpg'
        };
        this.props.myMenu(menu)
    }
    render() {
        return (
          <PostForm onChange={this.onChange} onSubmit={this.onSubmit}/>        
        );
    }
}

export default connect (
    null,
    {myMenu}
) (Postmenu)
