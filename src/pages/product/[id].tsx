import Link from "next/link";

function ViewProduct() {
  return (
    <div className="container">
      {/* Bar cum */}
      <ul className="flex list-none">
        <li>
          <Link
            className="font-medium text-slate-600 hover:text-slate-900"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-slate-600 hover:text-slate-900"
            href="/"
          >
            /Category
          </Link>
        </li>
        <li>
          <Link
            className="font-medium text-slate-600 hover:text-slate-900"
            href="/"
          >
            /Product ID
          </Link>
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:col-span-1">Left</div>
        <div className="sm:col-span-1">Right</div>
      </div>
    </div>
  );
}

export default ViewProduct;
