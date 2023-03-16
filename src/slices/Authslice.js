import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
//import { API } from "../common/Common";
import {apiUrl} from '../common';
const initialState = {
  userData: {},
};

//sign in google functionality with API Calling
export const registerUser = createAsyncThunk(
  'auth/data',
  async (firebaseUserData, thunkAPI) => {
    try {
      const response = await fetch(`${apiUrl}/api/sign-up`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(firebaseUserData),
      });
      let data = await response.json();
      // console.log("ffffffffffffffffffffffffff",data);

      if (data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);

//create slice for authentication functionality
const authReducer = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, (state, action) => {})
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          userData: {
            ...action?.payload?.data,
          },
        };
      })
      .addCase(registerUser.rejected, (state, action) => {});
  },
});
//export const { clearState } = authReducer.actions;
export default authReducer.reducer;
export const authSelector = state => state?.auth;
