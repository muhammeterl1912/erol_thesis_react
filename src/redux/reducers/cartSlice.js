import { createSlice } from "@reduxjs/toolkit";
import request from "@/utils/request";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart = state.cart.concat(payload);
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    resetCart: (state) => initialState
  },
});

export const addOrder = async (body) => {
  try {
    const { data } = await request.post("/Orders/Add.php", body);

    if(data==="ok"){
      toast.success("Your order has been succesfully placed.")
      return true;
    }

    toast.error("An Error Ocurred!");
    return true;
  } catch (_) {
    return false;
  }
};

export const { addCart, setCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
