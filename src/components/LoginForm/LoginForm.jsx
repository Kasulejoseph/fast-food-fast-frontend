import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";

const LoginForm = ({ onChange, onSubmit }) => {
  return (
    <MDBContainer className="mt-5 pt-5 ">
      <MDBRow className="flex flex-center">
        <MDBCol md="6">
          <form onSubmit={onSubmit}>
            <MDBCard className="mx-auto">
              <MDBCardBody>
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your Username"
                  group
                  type="text"
                  name="username"
                  onChange={onChange}
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  name="password"
                  onChange={onChange}
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    gradient="blue"
                    rounded
                    type="submit"
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon
                      icon="facebook"
                      className="blue-text text-center"
                    />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon icon="google-plus" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="./signup" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;