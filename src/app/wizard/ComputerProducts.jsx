import {memo, useCallback, useEffect, useState, useTransition} from "react";
import ComputerBrands from "@/app/wizard/ComputerBrands";
import ComputerProduct from "@/app/wizard/ComputerProduct";
import {useDispatch, useSelector} from "react-redux";
import {productHandle} from "@/redux/reducers/productSlice";
import searchObject from "@/utils/searchObject";

function ComputerProducts({ componentId }) {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const [isPending, startTransition] = useTransition();

    const [productData, setProductData] = useState([])
    const [brandId, setBrandId] = useState(0)
    const [value, setValue] = useState("")

    useEffect(()=>{
        dispatch(productHandle(componentId))
    }, [componentId])

    useEffect(()=>{
        setProductData(products)
    }, [products])


    useEffect(()=>{
        const data = searchObject(products, value)
        setProductData(data)
    }, [value])

    const handleSetBrandId = useCallback((e) => {
        setValue("")
        if(e !== brandId){
            setBrandId(e);
            const data = products?.filter(x => x.brand_id === e);
            setProductData(data)
        }else{
            setBrandId(0);
            setProductData(products)
        }

    }, [setBrandId, brandId, setValue, products, setProductData])


  return (
    <div className="border-2 border-blue-600 rounded-xl p-4 mt-4 space-y-4">
      <input
        placeholder="Search for product name or code"
        className="w-full border border-gray-300 px-4 py-2 rounded-full"
        onChange={e => setValue(e.target.value)}
        value={value}
      />

      <ComputerBrands brandId={brandId} setBrandId={handleSetBrandId} />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-300 font-medium text-center">
              <td className="px-4 py-3 w-28 rounded-tl-lg rounded-bl-lg">
                Image
              </td>
              <td className="px-4 py-3 w-1/3">Product Name</td>
              <td className="px-4 py-3">Brand</td>
              <td className="px-4 py-3">Price</td>
              <td className="px-4 py-3 rounded-tr-lg rounded-br-lg">Action</td>
            </tr>
          </thead>

          <tbody>
            {productData?.map(
              (item) => (
                <ComputerProduct key={item.id} item={item} />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComputerProducts;
