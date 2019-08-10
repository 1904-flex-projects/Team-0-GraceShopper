import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

const Container = props => <User {...props} />;
const mapStateToProps = state => ({
  // return an object that looks like proptypes
});

const mapDispatchToProps = dispatch => ({
  // get user and orders for user using dispatch
});

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const connectedUserContainer = connectComponent(Container);
export default connectedUserContainer;
