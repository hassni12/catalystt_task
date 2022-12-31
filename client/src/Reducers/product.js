import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHandler } from "../utils/api";
import { toast } from "react-toastify";

export const productDataThunk = createAsyncThunk("product_Thunk", async () => {
  try {
    const res = await ApiHandler().get(`/api/products`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

const authSlice = createSlice({
  name: "data_slice",
  initialState: {
    data: [],
    error: "",
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(productDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.success = action?.payload?.success;
          state.data = action?.payload?.data;
        } else {
          state.error = action?.payload?.message;
          toast.error(action?.payload?.message);
        }
      })

      .addCase(productDataThunk.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default authSlice.reducer;
