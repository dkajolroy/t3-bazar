import { type NextPage } from "next";
import Head from "next/head";
import Product from "~/components/Product";
import { product } from "~/constants/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bazar</title>
        <meta
          name="description"
          content="World top buy and sell product marketplace."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="h-screen bg-slate-100">
        <div className="container">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {product.map((item, index) => (
              <Product key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
