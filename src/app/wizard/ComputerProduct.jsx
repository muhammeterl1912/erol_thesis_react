import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWizardCart, setWizardCart } from "@/redux/reducers/wizardSlice";
import { clsx } from "clsx";

function ComputerProduct({ item }) {
  const dispatch = useDispatch();
  const { wizardCart } = useSelector((state) => state.wizard);

  const isSelected = wizardCart?.filter((e) => e.id === item.id)?.length > 0;

  const handleWizardCart = useCallback(() => {
    if (isSelected) {
      dispatch(setWizardCart(wizardCart?.filter((e) => e.id !== item.id)));
    } else {
      dispatch(addWizardCart({...item, price: parseFloat(item.price)}));
    }
  }, [dispatch, addWizardCart, setWizardCart, item, wizardCart, isSelected]);

  return (
    <tr className="border-t text-center">
      <td>
        <img
          src={item.image}
          alt="a"
          className="rounded-lg w-24 h-24 object-cover"
        />
      </td>
      <td>
        <h6 className="text-sm lg:text-md">{item.name}</h6>
      </td>
      <td>
        <span className="text-sm lg:text-md">
          {item.brand_name}
        </span>
      </td>
      <td>
        <span>{parseFloat(item.price)?.toCurrency()}</span>
      </td>
      <td>
        <button
          onClick={handleWizardCart}
          type="button"
          className={clsx(
            "rounded-full px-6 py-2 text-white uppercase",
            !isSelected
              ? "bg-blue-600 hover:bg-blue-600/80"
              : "bg-red-500 hover:bg-red-500/80"
          )}
        >
          {isSelected ? "Remove" : "Add"}
        </button>
      </td>
    </tr>
  );
}

export default memo(ComputerProduct);
