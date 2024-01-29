import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {brandHandle} from "@/redux/reducers/brandSlice";
import {clsx} from "clsx";

function ComputerBrands({ brandId, setBrandId }) {

  const dispatch = useDispatch();
  const { brands } = useSelector(state => state.brand);

  useEffect(() => {
   dispatch(brandHandle());
  }, [])

  return (
    <div className="bg-gray-200 rounded-lg px-4 py-3 flex items-center gap-x-3 overflow-x-auto">
      {brands?.map((item) => (
        <button
          key={item.id}
          onClick={() => setBrandId(item.id)}
          className={clsx("bg-white border border-emerald-900 px-4 py-2 rounded-lg text-emerald-900 font-semibold hover:bg-black/10 transition-colors delay-75", brandId === item.id && "bg-black/10")}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default memo(ComputerBrands);
