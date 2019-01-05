import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MDBContainer className="view" >
          <MDBRow >
            <MDBCol className="bg-danger" md="8" size="4">.col-4</MDBCol>
            <MDBCol className="bg-primary" md="2"  size="4">.col-4</MDBCol>
            <MDBCol className="bg-success" md="2"  size="4">.col-4</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default TestComponent;
