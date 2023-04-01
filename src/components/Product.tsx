import Link from "next/link";
import { ProductType } from "~/interface/dataType";

type Props = { item: ProductType };
function Product({ item }: Props) {
  return (
    <div className="overflow-hidden bg-white hover:shadow-lg">
      {/* Go to View Product */}
      <Link href="/">
        <div className="flex">
          <img
            className=" w-full object-cover"
            src={item.thumbnail}
            alt="product"
          />
        </div>
        <div className="overflow-hidden px-2 py-1">
          <h2 className="text-sm">
            {`${item.title.slice(0, 25)}${item.title.length > 25 ? "..." : ""}`}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-md font-bold">
              ${item.price} {/* Header Set currency based */}
            </span>
            <div className="flex">
              {/* Header Set currency based */}
              <span className="text-sm text-slate-500 line-through">$350</span>
              <span className="ml-1 text-sm text-black">-75%</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
