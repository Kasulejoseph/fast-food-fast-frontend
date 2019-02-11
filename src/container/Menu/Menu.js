import React from 'react';
import {connect} from 'react-redux'
import {myMenu} from '../../actions/feactAction'
import PostForm from '../../components/PostForm/PostForm'
import FixedNavbarExample from '../../container/NavBar/NavBar';
import Navbar from '../../components/NavBar/Navbar';


export class Postmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: '',
            description: '',
            price: '',
            image: '',
            collapse: false,
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onClick() {
        this.setState({
            collapse: !this.state.collapse,
          });
      }
    onSubmit(e){
        e.preventDefault();
        const menu = {
            meal: this.state.meal,
            description: this.state.description,
            price: Number(this.state.price),
            image: 'image.jpg'
        };
        myMenu(menu)
    }
    render() {
        return (
            <>
            <Navbar onClick={this.onClick} isOpen ={this.state.collapse}/>,
          <PostForm onChange={this.onChange} onSubmit={this.onSubmit}/>  
          </>      
        );
    }
}

export default connect (
    null,
    {myMenu}
) (Postmenu)
