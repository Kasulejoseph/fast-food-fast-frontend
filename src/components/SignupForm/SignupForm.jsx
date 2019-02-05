import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';


const SignupForm = ({onChange, onSubmit}) => {
    return (
        <MDBContainer className="mt-5 pt-5 ">
            <MDBRow className="flex flex-center">
                <MDBCol md="6">
                <form onSubmit = {onSubmit}>
                <MDBCard>
                    <MDBCardBody className="mx-4">
                    <div className="text-center">
                        <h3 className="pink-text mb-5">
                        <strong>Sign up</strong>
                        </h3>
                    </div>
                    <MDBInput
                    label="Your Username"
                    group
                    type="text"
                    name='username'
                    onChange={onChange}
                    validate
                    />
                    <MDBInput
                    label="Your email"
                    group
                    type="email"
                    name='email'
                    onChange={onChange}
                    validate 
                    />
                    <MDBInput
                    label="Your password" 
                    group 
                    type="password" 
                    name='password' 
                    onChange={onChange} 
                    validate />
                    <MDBInput 
                    label="Your Location" 
                    group type="text" 
                    name='location' 
                    onChange={onChange} 
                    validate />
                    <div className="md-form pb-3">
                        <div className="form-check my-4">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultCheck12"
                        />
                        <label htmlFor="defaultCheck12" className="grey-text">
                            Accept the
                            <a href="#!" className="blue-text">

                            Terms and Conditions
                            </a>
                        </label>
                        </div>
                    </div>
                    <MDBRow className="d-flex align-items-center mb-4">
                        <MDBCol md="6" className="text-center">
                        <button 
                            type="submit"
                            className="btn btn-pink btn-block btn-rounded z-depth-1"
                        >
                            Sign up
                        </button>
                        </MDBCol>
                        <MDBCol md="6">
                        <p className="font-small grey-text d-flex justify-content-end">
                            Have an account?
                            <a href="./" className="blue-text ml-1">

                            Log in
                            </a>
                        </p>
                        </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                    <div className="footer pt-3 mdb-color lighten-3">
                    <MDBRow className="d-flex justify-content-center">
                        <p className="font-small white-text mb-2 pt-3">
                        or Sign up with:
                        </p>
                    </MDBRow>
                    <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                        <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                        <MDBIcon className="fa fa-facebook white-text fa-lg"> </MDBIcon>
                        </a>
                        <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                        <MDBIcon className="fa fa-twitter white-text fa-lg"> </MDBIcon>
                        </a>
                        <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                        <MDBIcon className="fa fa-google-plus white-text fa-lg"> </MDBIcon>
                        </a>
                    </MDBRow>
                    </div>
                </MDBCard>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
    );
};


export default SignupForm;