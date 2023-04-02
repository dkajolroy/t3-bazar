import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "~/components/global/Footer";
import Headers from "~/components/global/Headers";
import MobileMenu from "~/components/global/MobileMenu";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="bg-slate-100">
        <Headers />
        <Component {...pageProps} />
        <Footer />
        <MobileMenu />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
