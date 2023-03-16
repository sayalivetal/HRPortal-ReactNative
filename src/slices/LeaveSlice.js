import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
//import { API } from "../common/Common";
import {apiUrl} from '../common';
const initialState = {
  leaveData: [],
};

//sign in google functionality with API Calling
export const leaveList = createAsyncThunk(
  'leave/data',
  async (jwt, thunkAPI) => {
    try {
      const response = await fetch(`${apiUrl}/api/leaves/leave-type/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      let data = await response.json();
      console.log('ffffffffffffffffffffffffff', data);

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
const leaveReducer = createSlice({
  name: 'leave',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(leaveList.pending, (state, action) => {})
      .addCase(leaveList.fulfilled, (state, action) => {
        return {
          leaveData: [...action?.payload?.data],
        };
      })
      .addCase(leaveList.rejected, (state, action) => {});
  },
});
//export const { leaveList } = authReducer.actions;
export default leaveReducer.reducer;
export const leaveSelector = state => state?.leave;
