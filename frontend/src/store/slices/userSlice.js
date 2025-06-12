import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch user data with token

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
  },
  reducers: {
    registerRequest(state, action) {
      state.user = {};
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
      state.message = action.payload.message;
      state.loading = false;
    },
    registerFailure(state, action) {
      state.user = {};
      state.isAuthenticated = false;
      state.error = action.payload;
      state.message = null;
      state.loading = false;
    },
    loginRequest(state, action) {
      state.user = {};
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
      state.message = action.payload.message;
      state.loading = false;
    },
    loginFailure(state, action) {
      state.user = {};
      state.isAuthenticated = false;
      state.error = action.payload;
      state.message = null;
      state.loading = false;
    },
    logoutSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = null;
      state.message = action.payload;
    },
    logoutFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = state.isAuthenticated;
      state.user = state.user;
      state.error = action.payload;
    },
    fetchUserRequest(state, action) {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
      state.user = {};
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
      state.error = action.payload;
    },

    clearAllErrors(state, action) {
      state.error = null;
      state.user = state.user;
    },
  },
});

export const registerUser = (data) => async (dispatch) => {
  dispatch(userSlice.actions.registerRequest());
  try {
    let link = `http://localhost:3000/api/v1/user/register`;
    const response = await axios.post(link, data, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(userSlice.actions.registerSuccess(response.data));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.registerFailure(error.response.data.message));
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());
  try {
    let link = `http://localhost:3000/api/v1/user/login`;
    const response = await axios.post(link, data, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    dispatch(userSlice.actions.loginSuccess(response.data));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.loginFailure());
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    let link = `http://localhost:3000/api/v1/user/logout`;
    const { data } = await axios.get(link, { withCredentials: true });
    dispatch(userSlice.actions.logoutSuccess(data.message));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.logoutFailure());
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(userSlice.actions.fetchUserRequest());
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/user/getuser`,
      { withCredentials: true }
    );
    dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
    dispatch(userSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(userSlice.actions.fetchUserFailure());
  }
};

export const clearAllUserErrors = () => (dispatch) => {
  dispatch(userSlice.actions.clearAllErrors());
};

export const resetUserSlice = () => (dispatch) => {
  dispatch(userSlice.actions.resetUserSlice());
};

export default userSlice.reducer;
