"use client";
import ComputerComponent from "@/app/wizard/ComputerComponent";
import ChoosedProducts from "@/app/wizard/ChoosedProducts";
import Navbar from "@/app/components/Navbar";
import {useCallback, useEffect, useState} from "react";
import { componentHandle } from "@/redux/reducers/componentSlice";
import { useDispatch, useSelector } from "react-redux";
import ComputerProducts from "@/app/wizard/ComputerProducts";
import Footer from "@/app/components/Footer";

export default function Wizard() {
  const dispatch = useDispatch();
  const { components } = useSelector((state) => state.component);
  const [componentId, setComponentId] = useState(0);

  useEffect(() => {
    dispatch(componentHandle());
  }, []);

  const handleComponent = useCallback((e) => {
    setComponentId(prevState => prevState === e ? 0 : e)
  }, [setComponentId])

  return (
    <main>
      <Navbar />

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-2">
          {components?.map((item) => (
            <div key={item.id} className="mt-5">
              <ComputerComponent
                  item={item}
                  componentId={componentId}
                  setComponentId={handleComponent}
              />

              {componentId === item.id && <ComputerProducts componentId={componentId} />}
            </div>
          ))}


        </div>
        <div className="col-span-3 lg:col-span-1">
          <ChoosedProducts />
        </div>
      </div>

      <Footer />
    </main>
  );
}
