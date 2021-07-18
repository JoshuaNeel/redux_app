import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Actions/ActionCreators';

class userPosts extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        
    }
    handleClick(){
        this.props.actions.postUser(this.state)
    }
    handleChange(event){
        if(event.target.name === "userName"){
            this.setState({...this.state,name:event.target.value})
        }
        else if(event.target.name === "email"){
            this.setState({...this.state,email:event.target.value})
        }        
    }
    render() {
        return (
            <div>
                <input type = 'text' name='userName' onChange = {this.handleChange} value = {this.state.name} placeholder="Enter your username"></input>
                <input type = 'email' name='email' onChange = {this.handleChange} value = {this.state.email} placeholder="Enter your email"></input>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    users: state.userDetails.users
})
const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(actions,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(userPosts);