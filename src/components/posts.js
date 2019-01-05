import React from 'react';
import {connect} from 'react-redux'
import { fetchMenu } from '../actions/fetchAction';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentWillMount(){
        this.props.fetchMenu()
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        // this.setState({
        //     posts: nextProps.menu
        // })
    }
    render() {
        // console.log(this.props.menu)
        const  postItems = this.props.menu.map(
            post => { 
            return  (
                <div key={post.menu_id}>
                <h3>{post.meal}</h3>
                <h3>{post.desc}</h3>
                </div>
            )
            }
        );
        return (
            <div>
                <h1>hello josh</h1>
                {postItems}
            </div>  
        );
    }
}

const mapStateToProps = (state) => {
  return  ({
    menu:state.menu.menu
})};

export default connect (
    mapStateToProps, 
   {fetchMenu}
)(Posts);
