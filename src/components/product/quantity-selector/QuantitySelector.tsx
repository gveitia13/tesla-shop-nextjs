'use client'
import {IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import {useState} from "react";

interface Props {
  quantity: number
}

export const QuantitySelector = ({quantity}: Props) => {
  const [count, setCount] = useState(quantity)
  const onQuantityChange = (quantity: number) => {
    if (count + quantity < 1) return
    setCount(count + quantity)
  }

  return (
    <div className="flex">
      <button onClick={() => onQuantityChange(-1)}><IoRemoveCircleOutline size={30}/></button>
      <span className={'w-20 mx-3 px-5 bg-gray-200 text-center rounded'}>{count}</span>
      <button onClick={() => onQuantityChange(+1)}><IoAddCircleOutline size={30}/></button>
    </div>
  );
};
