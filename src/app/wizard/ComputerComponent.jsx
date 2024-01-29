"use client";
import { useCallback, useState, memo } from "react";
import { GiProcessor } from "react-icons/gi";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { clsx } from "clsx";
import ComputerProducts from '@/app/wizard/ComputerProducts'

function ComputerComponent({item, componentId, setComponentId}) {
  const toggleDetail = useCallback(() => {
      setComponentId(item.id);
  }, [setComponentId]);

  return (
      <button
          onClick={toggleDetail}
          className={clsx(
              "w-full p-5 rounded-lg flex items-center justify-between cursor-pointer transition-colors delay-75",
              componentId === item.id ? "bg-blue-600 hover:bg-blue-600/80" : "bg-white border border-blue-600 hover:bg-black/10"
          )}
      >
        <div className="flex items-center gap-x-4">
          <GiProcessor className={clsx("text-3xl", componentId === item.id ? "text-white" : "text-blue-600")} />
          <h5 className={clsx(componentId === item.id ? "text-white" : "text-blue-600")}>{item.name}</h5>
        </div>
        {componentId !== item.id ? (
            <BsChevronDown className={clsx("text-2xl", componentId === item.id ? "text-white" : "text-blue-600")} />
        ) : (
            <BsChevronRight className={clsx("text-2xl", componentId === item.id ? "text-white" : "text-blue-600")} />
        )}
      </button>
  );
}

export default memo(ComputerComponent);
