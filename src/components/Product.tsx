import { product } from "../constants/data";

type Props = { item: (typeof product)[0] };
function Product({ item }: Props) {
  return (
    <div className="rounded-md bg-slate-300  p-2">
      <h2>{item.title}</h2>
      <span className="text-md font-bold">${item.price}</span>
    </div>
  );
}

export default Product;
