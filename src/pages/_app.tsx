import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "~/components/Global/Footer";
import Headers from "~/components/Global/Headers";
import MobileMenu from "~/components/Global/MobileMenu";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Headers />
      <Component {...pageProps} />
      <Footer />
      <MobileMenu />
    </SessionProvider>
  );
};

export default MyApp;
