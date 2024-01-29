import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWizardCart } from "@/redux/reducers/wizardSlice";
import toCurrency from "@/utils/toCurrency";
import { AiOutlineClose } from "react-icons/ai";

function ChoosedProductItem({ item }) {
  const dispatch = useDispatch();
  const { wizardCart } = useSelector((state) => state.wizard);

  const removeFromCart = () => {
    dispatch(setWizardCart(wizardCart?.filter((e) => e.id !== item.id)));
  };

  return (
    <div className="border border-blue-300 px-4 py-3 rounded flex items-center justify-between">
      <div className="w-4/6 flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 object-cover rounded mr-3"
        />
        <div>
          <h6 className="text-sm">{item.name}</h6>
          <div className="font-semibold text-sm">{parseFloat(item.price)?.toCurrency()}</div>
        </div>
      </div>
      <div className="flex-col justify-between">
        <button
          onClick={removeFromCart}
          className="flex items-center border rounded-lg border-red-500 px-3 py-1 text-red-500 hover:bg-red-200 gap-x-2"
        >
          <AiOutlineClose size={14} />
          <span className="text-xs font-semibold">Remove</span>
        </button>
      </div>
    </div>
  );
}

export default memo(ChoosedProductItem);
