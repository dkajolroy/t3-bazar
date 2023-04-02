import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Breadcrumb from "~/components/Breadcrumb";
import Product from "~/components/Product";
import SortHeader from "~/components/Search/SortHeader";
import { category } from "~/constants/data";
import { ProductType } from "~/interface/dataType";

type Props = {
  searchResponse: {
    products?: ProductType[];
    total: 0;
    skip: 0;
    limit: 0;
  };
};
function search({ searchResponse }: Props) {
  const { query, push } = useRouter();

  return (
    <>
      <Head>
        <title>Bazar | {query.text}</title>
        <meta
          name="description"
          content="Search to collect your favorite product in world most popular marketplace."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container my-2 bg-white py-2">
        <div className="border-b border-slate-200 py-2">
          <Breadcrumb />
        </div>
        {/* Responsive Filter and Products */}
        <div className="grid grid-cols-10">
          <div className="col-span-2">
            {/* Searched Product Related Categories */}
            {category.map((item, index) => (
              <div key={index}>
                <span className="text-xs text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="col-span-8">
            <SortHeader />
            <div className="grid grid-cols-6 gap-2">
              {searchResponse.products?.map((item, index) => (
                <Product key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  searchResponse: Props;
}> = async (context) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${context.query?.text}`
  );
  const data: Props = await res.json();

  return {
    props: {
      searchResponse: data,
    },
  };
};
export default search;
