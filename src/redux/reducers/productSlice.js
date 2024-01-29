
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import request from "@/utils/request";
import {toast} from "react-toastify";

const initialState = {
  products: [],
    productLoader: false,

};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(productHandle.pending, (state) => {
          state.productLoader = true;
        })
        .addCase(productHandle.fulfilled, (state, { payload }) => {
            state.products = payload || [];
            state.productLoader = false;
        })
        .addCase(productHandle.rejected, (state) => {
            state.productLoader = false;
        });
  },
});

export const productHandle = createAsyncThunk(
    "product/list",
        async (component_id) => {
            try{

                const { data } = await request.post(`/Products/List.php?component_id=${component_id}`);

                return data;

            }catch(_){
                toast.error("An error occurred while pulling products.");
                return false;
            }
        }
);

export default productSlice.reducer;
