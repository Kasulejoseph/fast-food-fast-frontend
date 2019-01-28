import React from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../../actions/fetchAction";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer
} from "mdbreact";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    this.props.fetchMenu();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // this.setState({
    //     posts: nextProps.menu
    // })
  }
  render() {
    // console.log(this.props.menu)
    const postItems = this.props.menu.map(post => {
      return (
        <MDBContainer className="mt-2">
          <MDBCard>
            <MDBCardBody>
              <div key={post.menu_id}>
                <div>
                  meal: <span className="font-weight-bold">{post.meal}</span>
                </div>
                <div>{post.desc}</div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
    });
    return (
      <div>
        <h1>hello josh</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //menu should be the key set to the root reducer
    menu: state.menu.menu
  };
};

export default connect(
  mapStateToProps,
  { fetchMenu }
)(Posts);
