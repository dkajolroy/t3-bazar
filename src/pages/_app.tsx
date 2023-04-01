import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import Headers from "~/components/Headers";
import MobileMenu from "~/components/MobileMenu";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Headers />
      <Component {...pageProps} />
      <MobileMenu />
    </SessionProvider>
  );
};

export default MyApp;
