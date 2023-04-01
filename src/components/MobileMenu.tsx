import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";

function MobileMenu() {
  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 block w-full bg-white py-2 md:hidden">
        <ul className="flex items-center justify-around">
          <li>
            <Link
              className=" flex px-4 text-2xl text-slate-700 hover:text-slate-900 "
              href="/"
            >
              <IoHomeOutline />
            </Link>
          </li>
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
  );
}

export default MobileMenu;
