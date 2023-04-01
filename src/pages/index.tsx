import Head from "next/head";
import FlashSell from "~/components/FlashSellHeader";
import HeroSection from "~/components/HeroSection";
import Product from "~/components/Product";
import { ProductResponse } from "~/interface/dataType";

type Props = { response?: ProductResponse };
const Home = ({ response }: Props) => {
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

      {/* Body */}
      <main>
        {/* Hero Slider */}
        <div className="container">
          <HeroSection />
        </div>
        {/* Flash sell */}
        <div className="container py-10">
          <div className="bg-white">
            <FlashSell />
            <div className="my-2 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {response?.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* Other */}
        <div className="container py-10">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {/*  product */}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dummyjson.com/products?limit=6");
  const response = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      response,
    },
  };
}
export default Home;
