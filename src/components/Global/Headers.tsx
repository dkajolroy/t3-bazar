import Link from "next/link";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

function Headers() {
  const [scrollShow, setScrollShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        setScrollShow(true);
      } else {
        setScrollShow(false);
      }
    });
  }, []);
  return (
    <div>
      {/* Seller Center Link */}
      <div className="hidden xl:block">
        <Link href="/">
          <div className="h-16 bg-[url('/header.jpg')] bg-cover bg-center  bg-no-repeat"></div>
        </Link>
      </div>
      {/* Total header */}
      <div className={`${scrollShow ? "fixed" : ""} top-0 z-50 w-full`}>
        {/* Top header mini */}
        <TopHeader />
        {/* Main Header */}
        <MainHeader />
      </div>
    </div>
  );
}

export default Headers;
