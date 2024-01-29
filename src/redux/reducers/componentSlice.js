import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import request from "@/utils/request";
import {toast} from "react-toastify";

const initialState = {
  components: [],
    componentLoader: false,

};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(componentHandle.pending, (state) => {
          state.componentLoader = true;
        })
        .addCase(componentHandle.fulfilled, (state, { payload }) => {
            state.components = payload || [];
            state.componentLoader = false;
        })
        .addCase(componentHandle.rejected, (state) => {
            state.componentLoader = false;
        });
  },
});

export const componentHandle = createAsyncThunk(
    "component/list",
        async () => {
            try{

                const { data } = await request.post("/Components/List.php");

                return data;

            }catch(_){
                toast.error("An error occurred while pulling components.");
                return false;
            }
        }
);

export default componentSlice.reducer;
