import Link from "next/link";
import { BsCart4, BsSearch } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
function MainHeader() {
  return (
    <div className="bg-white ">
      <div className="container py-3">
        <div className="grid grid-cols-9 gap-2">
          {/* Logo Left Side */}
          <div className="col-span-2">
            <img className="h-12" src="/logo.png" alt="logo" />
          </div>
          <div className="col-span-5 flex h-full items-center">
            {/* Search Box  Center*/}
            <div className="flex w-full">
              <input
                type="text"
                className="w-full rounded-l-md bg-slate-200 px-2 py-2 transition focus:bg-slate-300 focus:outline-none"
              />
              <button className="rounded-r-md bg-teal-400  px-5 text-xl text-white transition hover:bg-teal-500 focus:outline-none">
                <BsSearch />
              </button>
            </div>
          </div>
          {/* Cart section Right side */}
          <div className="col-span-2">
            <ul className="flex h-full list-none items-center justify-end">
              <li>
                <Link
                  className=" flex px-4 text-2xl text-slate-700 hover:text-slate-900 "
                  href="/"
                >
                  <BsCart4 />
                </Link>
              </li>
              <li>
                <Link
                  className="flex px-4 text-2xl text-slate-700 hover:text-slate-900 "
                  href="/"
                >
                  <FiHeart />
                </Link>
              </li>
              <li>
                <Link
                  className="flex px-4 text-2xl text-slate-700 hover:text-slate-900 "
                  href="/"
                >
                  <FiUser />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
