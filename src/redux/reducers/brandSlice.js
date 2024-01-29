import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import request from "@/utils/request";
import {toast} from "react-toastify";

const initialState = {
  brands: [],
    brandLoader: false,

};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(brandHandle.pending, (state) => {
          state.brandLoader = true;
        })
        .addCase(brandHandle.fulfilled, (state, { payload }) => {
            state.brands = payload || [];
            state.brandLoader = false;
        })
        .addCase(brandHandle.rejected, (state) => {
            state.brandLoader = false;
        });
  },
});

export const brandHandle = createAsyncThunk(
    "brand/list",
        async () => {
            try{

                const { data } = await request.post("/Brands/List.php");

                return data;

            }catch(_){
                toast.error("An error occurred while pulling brands.");
                return false;
            }
        }
);

export default brandSlice.reducer;
