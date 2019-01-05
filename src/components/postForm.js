import React from 'react';
import {connect} from 'react-redux'
import {myMenu} from '../actions/fetchAction'
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
            <div>
                <h1>Add Menu</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>meal:</label> 
                        <input type="text" name='meal' onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                        <label>description:</label> 
                        <input type="text" name='description' onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                        <label>price:</label> 
                        <input type="number" name='price' onChange={this.onChange} />
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect (
    null,
    {myMenu}
) (Postmenu)



