import { 
  loginFailure, 
  loginStart, 
  loginSuccess, 
} from "./userSlice";
import {
  getProductsStart, 
  getProductsSuccess, 
  getProductsFailure, 
  deleteProductStart, 
  deleteProductSuccess, 
  deleteProductFailure,
  addProductStart, 
  addProductSuccess, 
  addProductFailure, 
} from './productSlice';

import { publicRequest, userRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post('/products', product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
