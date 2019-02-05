import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const PostForm = ({onChange, onSubmit}) => {
    return (
        <MDBContainer className="mt-5 pt-5">
      <MDBRow>
        <MDBCol md="6">
          <form  onSubmit = {onSubmit}>
            <p className="h4 text-center mb-4" color = 'elegant-color-dark'>Add menu</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Meal 
            </label>
            <input
              type="text"
              name='meal'
              onChange={onChange} 
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
              onChange={onChange}
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
              onChange={onChange}
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
};

export default PostForm;
