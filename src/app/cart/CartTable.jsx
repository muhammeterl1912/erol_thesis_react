"use client";
import CartTableItem from "@/app/cart/CartTableItem";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function CartTable({ setCustomerInfoContent }) {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart?.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-b-gray-300">
            <td className="pb-4">Product Image</td>
            <td className="pb-4">Product Name</td>
            <td className="pb-4">Quantity</td>
            <td className="pb-4">Price</td>
          </tr>
        </thead>
        <CartTableItem />
      </table>

      <div className="w-full mt-5 text-xl space-y-5">
        <div className="flex justify-end gap-x-3">
          <div>Total Price:</div>
          <div className="font-semibold">
            {parseFloat(totalPrice)?.toCurrency()}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setCustomerInfoContent(true)}
            className="bg-green-600 px-4 w-48 py-3  text-white flex items-center justify-center gap-x-1 hover:bg-green-500"
          >
            <HiOutlineShoppingCart size={25} />
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
