import React from 'react';
import {connect} from 'react-redux'
import {myMenu} from '../actions/fetchAction'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
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
    <MDBContainer className="mt-5 pt-5">
      <MDBRow>
        <MDBCol md="6">
          <form  onSubmit = {this.onSubmit}>
            <p className="h4 text-center mb-4" color = 'elegant-color-dark'>Add menu</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Meal 
            </label>
            <input
              type="text"
              name='meal'
              onChange={this.onChange} 
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              price
            </label>
            <input
              type="number" 
              name='price' 
              onChange={this.onChange}
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Description
            </label>
            <textarea
              type="text"
              name='description' 
              onChange={this.onChange}
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-start mt-4">
              <MDBBtn color="warning" outline type="submit">
                Send
                <MDBIcon icon="paper-plane-o" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 
            
        );
    }
}

export default connect (
    null,
    {myMenu}
) (Postmenu)
