import axios from 'axios';
import * as types from './actionTypes';

//get cart will always be get cart route
const getCart = cart => ({type: types.GET_CART, cart})
const updateCart = cart =>({})