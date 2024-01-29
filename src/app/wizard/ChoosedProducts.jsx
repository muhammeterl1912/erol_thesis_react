"use client";
import ChoosedProductItem from "@/app/wizard/ChoosedProductItem";
import { addCart } from "@/redux/reducers/cartSlice";
import { resetWizard } from "@/redux/reducers/wizardSlice";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ChoosedProducts() {
  const { wizardCart } = useSelector((state) => state.wizard);
  const dispatch = useDispatch();

  const totalPrice = wizardCart?.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  const handleAddCart = () => {
    const wizCart = JSON.parse(JSON.stringify(wizardCart));
    const carts = wizCart?.map((item) => {
      item.quantity = 1;
      return item;
    });
    dispatch(addCart(carts));
    dispatch(resetWizard());
    toast.success("Your products succesfully added to basket!");
  };

  return (
    <div className="w-full border border-gray-400 rounded-lg p-4 space-y-5">
      <h3 className="text-blue-900 text-lg font-bold text-center">
          Cart Summary
      </h3>

      {wizardCart?.length === 0 && (
        <div className="text-center font-medium">
            No Products Added Yet! Add from the side!
        </div>
      )}
      {wizardCart?.map((item) => (
        <ChoosedProductItem key={item.id} item={item} />
      ))}

      <div className="flex items-center justify-between pt-6">
        <span className="font-bold text-xl">TOTAL</span>
        <span className="font-bold text-xl">{parseFloat(totalPrice)?.toCurrency()}</span>
      </div>

      <button
        type="button"
        onClick={handleAddCart}
        className="w-full uppercase bg-green-500 rounded-full p-4 flex items-center justify-center text-white font-bold gap-x-3 transition-colors delay-75 hover:bg-green-400"
      >
        <BsCart3 className="text-xl" />
          Add to Basket
      </button>
    </div>
  );
}

export default ChoosedProducts;
