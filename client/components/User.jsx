import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  orders: PropTypes.arrayOf(
    propTypes.shape({
      id: PropTypes.number.isRequired,
      updatedAt: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  ),
};

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryId: PropTypes.number,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      updatedAt: PropTypes.string,
      createdAt: PropTypes.string,
    }),
  ).isRequired,
  getSingleProd: PropTypes.func.isRequired,
};

class User extends Component {
  // componentDidMount() {
  //   const { User } = this.props;
  // }

  render() {
    return (
      <div className="">
        <h1>User Profile</h1>
      </div>
    );
  }
}
