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
    dispatch({ type: 'UPDATE_PASSWORD', payload: data });
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

// export const updatePasswordByEmail = (email, newPassword) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const { data } = await axios.patch('http://localhost:5500/user/update-password', { email, newPassword }, config);

//     dispatch({
//       type: 'UPDATE_PASSWORD_SUCCESS',
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'UPDATE_PASSWORD_FAIL',
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

