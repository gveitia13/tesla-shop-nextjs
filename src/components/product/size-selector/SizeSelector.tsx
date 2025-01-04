import {Size} from "@/interfaces";
import {clsx} from "clsx";

interface Props {
  selectedSize: Size,
  availableSizes: Array<Size>,
}

export const SizeSelector = ({selectedSize, availableSizes}: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex">
        {availableSizes.map((size, i) => (
          <button className={clsx(
            "mx-2 hover:underline text-xl",
            {'underline': size === selectedSize}
          )} key={i}>{size}</button>
        ))}
      </div>
    </div>
  );
};
