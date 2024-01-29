"use client";
import { useDispatch, useSelector } from "react-redux";
import toCurrency from "@/utils/toCurrency";
import CartSwitchQuantity from "@/app/cart/CartSwitchQuantity";
import {setCart} from "@/redux/reducers/cartSlice";
import {useState} from "react";
import {toast} from "react-toastify";

export default function CartTableItem() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [deleteConfirmId, setDeleteConfirm] = useState(0)

  const cartCopy = JSON.parse(JSON.stringify(cart))
  const increment = (e) => {
    const value = e.quantity + 1;
    const newCart = cartCopy?.map((cart) => {
      if (cart.id === e.id) {
        cart.quantity = value;
      }
      return cart;
    });

    dispatch(setCart(newCart));
  };

  const decrement = (e) => {
    if(e.quantity === 1){
      setDeleteConfirm(e.id);
      document.getElementById('deleteConfirm').showModal()
      return false;
    }
    const value = e.quantity !== 1 ? e.quantity - 1 : 1;
    const newCart = cartCopy?.map((cart) => {
      if (cart.id === e.id) {
        cart.quantity = value;
      }
      return cart;
    });

    dispatch(setCart(newCart));
  };

  const handleRemoveCart = () => {
    console.log(deleteConfirmId)
    const newCart = cartCopy?.filter(e => e.id !== deleteConfirmId);
    dispatch(setCart(newCart));
    setDeleteConfirm(0);
    document.getElementById('deleteConfirm').close()
    toast.success("The product has been successfully removed from your cart!")
  }

  return (
      <>
        <dialog id="deleteConfirm" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure You Want to Remove This Item from Your Cart?</h3>
            <div className="py-4 flex justify-end gap-5">
              <button onClick={handleRemoveCart} className="btn btn-outline btn-success">Yes</button>
              <form method="dialog">
                <button className="btn btn-outline btn-error">No</button>
              </form>

            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <tbody>
        {cart?.map((item) => (
            <tr key={item.id} className="border-b border-b-gray-300">
              <td>
                <img
                    src={item?.image}
                    className="w-24 h-24 object-cover rounded-lg"
                />
              </td>
              <td>{item?.name}</td>
              <td>
                <CartSwitchQuantity
                    onIncrement={() => increment(item)}
                    onDecrement={() => decrement(item)}
                    value={item.quantity}
                />
              </td>
              <td>{item.price.toCurrency()}</td>
            </tr>
        ))}
        </tbody>
      </>
  );
}
