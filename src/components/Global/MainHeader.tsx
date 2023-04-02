import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
function MainHeader() {
  const router = useRouter();
  const [text, setText] = useState("");
  function searchAction() {
    router.push({
      pathname: `/search`,
      query: { text },
    });
  }
  return (
    <div className="bg-white ">
      <div className="container py-1 md:py-2">
        <div className="grid grid-cols-9 gap-2">
          {/* Logo Left Side */}
          <div className="col-span-3 md:col-span-2">
            <Link href="/">
              <img className="max-h-14 p-1" src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-span-6 flex  h-full items-center md:col-span-5 ">
            {/* Search Box  Center*/}
            <div className="flex w-full">
              <input
                onChange={(e) => setText(e.target.value)}
                type="text"
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    searchAction();
                  }
                }}
                placeholder="Search..."
                className="w-full rounded-l-md bg-slate-200 px-2 py-1 transition focus:bg-slate-300 focus:outline-none md:py-2"
              />
              <button
                onClick={searchAction}
                className="rounded-r-md bg-teal-500  px-3 text-xl text-white transition hover:bg-teal-600 focus:outline-none md:px-5"
              >
                <BsSearch />
              </button>
            </div>
          </div>
          {/* Cart section Right side */}
          <div className=" col-span-2 hidden md:flex">
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
