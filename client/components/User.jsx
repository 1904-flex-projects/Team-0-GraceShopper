import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import React from 'react';
import { connect } from 'react-redux';
// import User from '../components/User';
import { fetchUser } from '../actions/userActions';

// const Container = props => <User {...props} />;
const propTypes = {
  // order: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     updatedAt: PropTypes.string,
  //     createdAt: PropTypes.string,
  //   }),
  // ).isRequired,
  user: PropTypes.objectOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.email,
      country: PropTypes.string,
      state: PropTypes.string,
      city: PropTypes.string,
      postalCode: PropTypes.string,
      street: PropTypes.string,
      isAdmin: PropTypes.bool,
    }),
  ).isRequired,
  // product: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     // should this be decimal? don't see as an option
  //     price: PropTypes.number.isRequired,
  //     description: PropTypes.string.isRequired,
  //     stock: PropTypes.number,
  //     imageUrl: PropTypes.string,
  //   }),
  // ).isRequired,
  // fetchUser: PropTypes.func.isRequired,
};

class User extends Component {
  componentDidMount() {
    // const { fetchUser } = this.props;
    // console.log(user, product, order);
    // fetchUser();
    // console.log('****props here', this.props);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="">
        <h1>User Profile</h1>
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <h2>{user.email}</h2>
        <h1>Current Address</h1>
        <h3>{user.street}</h3>
        <h3>{`${user.city} ${user.state} ${user.postalCode}`}</h3>
      </div>
    );
  }
}

// return an object that looks like proptypes
const mapStateToProps = state => ({
  user: state.authenticate.auth.user,
});
// get user and orders for user using dispatch
const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

const connectedUser = connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
export default connectedUser;

User.propTypes = propTypes;
