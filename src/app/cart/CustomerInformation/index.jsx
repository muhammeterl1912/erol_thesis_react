import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, resetCart} from "@/redux/reducers/cartSlice";

export default function CustomerInformation({ setCustomerInfoContent }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      note: "",
    },
  });


  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart?.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const INPUTS = [
    {
      id: 1,
      name: "name",
      label: "Name",
      icon: "test",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      label: "Phone",
      icon: "test",
      required: true,
    },
    {
      id: 3,
      name: "email",
      label: "E-Mail",
      icon: "test",
      required: true,
    },
    {
      id: 4,
      name: "address",
      label: "Address",
      icon: "test",
      required: true,
    },
    {
      id: 5,
      name: "note",
      label: "Note",
      icon: "test",
      required: false,
    },
  ];

  const onSubmit = async (data) => {
    const orders = cart?.map((item) => {
      return { id: item.id, quantity: item.quantity, price: item.price };
    });
    const res = await addOrder({ ...data, orders });
    if(res){
      dispatch(resetCart())
      setCustomerInfoContent(false)
    }
  };

  return (
    <div>
      <div className="font-bold uppercase mb-10 text-2xl">
        Customer Information
      </div>
      <div className="gap-5 grid grid-cols-2">
        {INPUTS?.map((item) => (
          <div key={item.id} className="">
            <input
              {...register(item.name)}
              className="px-4 py-3 rounded border border-gray-300 w-full outline-none bg-gray-50 hover:bg-white"
              placeholder={item.label}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-x-3 text-xl">
        <div>Total Price:</div>
        <div className="font-semibold">
          {parseFloat(totalPrice)?.toCurrency()}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCustomerInfoContent(false)}
          className="bg-red-600 px-4 w-48 py-3  text-white flex items-center justify-center gap-x-1 mt-5 hover:bg-red-500"
        >
          <FaChevronLeft size={25} />
          Back
        </button>

        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-green-600 px-4 w-48 py-3  text-white flex items-center justify-center gap-x-1 mt-5 hover:bg-green-500"
        >
          <FaShoppingCart size={25} />
          Submit
        </button>
      </div>
    </div>
  );
}
