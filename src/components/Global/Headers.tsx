import Link from "next/link";
import MainHeader from "./MainHeader";

function Headers() {
  return (
    <div>
      {/* Seller Center Link */}
      <div className="hidden xl:block">
        <Link href="/">
          <div className="h-16 bg-[url('/header.jpg')] bg-cover bg-center  bg-no-repeat"></div>
        </Link>
      </div>
      {/* Header info */}
      <div className=" bg-slate-200 py-1 ">
        <div className="container flex items-center justify-between">
          {/* Left Section */}
          <div className="hidden md:block ">
            <ul className="flex ">
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
          <div className="w-full md:w-fit">
            <ul className="flex w-full list-none justify-between ">
              <li className="w-1/5 border-r border-slate-400 text-center md:w-max">
                <select className=" bg-slate-300 px-2 text-sm text-slate-500 transition hover:text-slate-900 focus:bg-slate-300 focus:outline-none">
                  <option value="usd">USD</option>
                  <option value="usd">BDT</option>
                  <option value="usd">Rs</option>
                </select>
              </li>
              <li className="w-1/5 border-r border-slate-400 text-center md:w-max">
                <Link
                  className=" px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Protection
                </Link>
              </li>
              <li className="w-1/5 border-r border-slate-400  text-center md:w-max">
                <Link
                  className=" px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Service
                </Link>
              </li>
              <li className="w-1/5 border-r border-slate-400 text-center md:w-max">
                <Link
                  className=" px-2 text-sm text-slate-500 hover:text-slate-900"
                  href="/"
                >
                  Help
                </Link>
              </li>
              <li className="w-1/5 text-center  md:w-max">
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
