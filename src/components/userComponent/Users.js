import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../Actions/ActionCreators';
class Users extends Component {
  constructor(){
    super();
    this.deleteUser = this.deleteUser.bind(this)
  }
  componentDidMount() {
    this.props.actions.fetchPosts();
  }
  deleteUser(event){
    this.props.actions.deleteUser(event.target.parentNode.id)
  }
render() {
    const usersList = this.props.users.map((user,i) => (
      <div className = 'test' key={i} id = {user.name}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button onClick={this.deleteUser}>Delete</button>
      </div>
    ));
    return (
      <div>
        <h2>Users</h2>
        {usersList}
      </div>
    );
  }
}
Users.propTypes = {
};
const mapStateToProps = state => ({
  users: state.userDetails.users
});
const mapDispatchToProps = dispatch => ({
  actions:bindActionCreators(actions,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Users);