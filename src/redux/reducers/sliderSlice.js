import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import request from "@/utils/request";
import {toast} from "react-toastify";

const initialState = {
  sliders: [],
    sliderLoader: false,

};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(sliderHandle.pending, (state) => {
          state.sliderLoader = true;
        })
        .addCase(sliderHandle.fulfilled, (state, { payload }) => {
            state.sliders = payload || [];
            state.sliderLoader = false;
        })
        .addCase(sliderHandle.rejected, (state) => {
            state.sliderLoader = false;
        });
  },
});

export const sliderHandle = createAsyncThunk(
    "slider/list",
        async () => {
            try{

                const { data } = await request.post("/Sliders/List.php");

                return data;

            }catch(_){
                toast.error("An error occurred while pulling sliders.");
                return false;
            }
        }
);

export default sliderSlice.reducer;
