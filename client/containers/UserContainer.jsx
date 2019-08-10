import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

const Container = props => <User {...props} />;
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const connectedUserContainer = connectComponent(Container);
export default connectedUserContainer;
