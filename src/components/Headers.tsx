import Link from "next/link";
import MainHeader from "./MainHeader";

function Headers() {
  return (
    <div>
      {/* Seller Center Link */}
      <Link href="/">
        <div className="h-16 bg-[url('/header.jpg')] bg-cover bg-center  bg-no-repeat"></div>
      </Link>
      {/* Header info */}
      <div className=" bg-slate-200">
        <div className="container flex items-center justify-between">
          {/* Left Section */}
          <div>
            <ul className="flex">
              <li>
                <Link
                  className="border-r border-slate-400 px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  App
                </Link>
              </li>
              <li>
                <Link
                  className="border-r border-slate-400 px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Track order
                </Link>
              </li>
              <li>
                <Link
                  className=" px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
          {/* Right Section */}
          <div>
            <ul className="flex list-none">
              <li>
                <select className="border-r border-slate-400 bg-slate-200  px-2 text-sm text-slate-500 transition hover:text-slate-900 focus:bg-slate-300 focus:outline-none">
                  <option value="usd">USD</option>
                  <option value="usd">TK</option>
                  <option value="usd">Rs</option>
                </select>
              </li>
              <li>
                <Link
                  className="border-r border-slate-400 px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Protection
                </Link>
              </li>
              <li>
                <Link
                  className="border-r border-slate-400 px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className="border-r border-slate-400 px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className=" px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <MainHeader />
    </div>
  );
}

export default Headers;
