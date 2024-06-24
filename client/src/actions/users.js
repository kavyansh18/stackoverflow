import * as api from "../api";
import axios from 'axios';

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePasswordByEmail = (email, newPassword) => async (dispatch) => {
  console.log(email)
  console.log(newPassword)
  try {
    const { data } = await api.updatePasswordByEmail(email, newPassword);
    alert(data.message);
    dispatch({ type: 'UPDATE_PASSWORD', payload: data });
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert('User does not exist');
  }
};

