import { GetServerSideProps } from "next";
import Head from "next/head";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "~/components/Breadcrumb";
import Review from "~/components/Review";
import { ProductType } from "~/interface/dataType";

const xProduct = {
  title: "Samsung",
  category: {
    name: "Electric",
    slug: "electronic",
  },
  subcategory: {
    name: "Mobile",
    slug: "mobile",
  },
  childCategory: {
    name: "Samsung",
    slug: "samsung",
  },
};
type Props = {
  product: ProductType;
};
function ViewProduct({ product }: Props) {
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
      <div>
        <div className="container  my-2 bg-white py-2 md:my-5">
          {/* Breadcrumb of product */}
          <Breadcrumb
            className="mb-5"
            category={xProduct.category}
            subcategory={xProduct.subcategory}
            childCategory={xProduct.childCategory}
          />
          <div className="grid grid-cols-1 gap-10  sm:grid-cols-2">
            {/* Product View Image */}
            <div className="sm:col-span-1 ">
              <img
                className="block w-full"
                src={product.thumbnail}
                alt="product"
              />
              {/* Image Slider */}
              <div className="w-full bg-slate-400">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="h-[120px]"
                >
                  {product.images.map((item, index) => (
                    <SwiperSlide
                      className="w-1/4 cursor-pointer border transition hover:border-slate-600 hover:opacity-[0.5]"
                      key={index}
                    >
                      <img
                        className="min-h-full w-full "
                        src={item}
                        alt="photo"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* Product Details */}
            <div className="sm:col-span-1">
              <h2 className="text-lg text-slate-700">{product.title}</h2>
              <span className="block text-sm font-medium">SKU: KFL55SC4C</span>
              <Review totalReview={4.2} />
              {/* Header currency based */}
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="block font-medium">
                Stock: {product.stock} item
              </span>
              {/* Product category based features */}
              {/* Size or color or Other variant */}
              <div>
                <button className="mr-2 rounded-md bg-slate-200 px-2 py-1 hover:bg-slate-300 focus:outline-none">
                  8/64GB
                </button>
                <button className="mr-2 rounded-md bg-slate-200 px-2 py-1 hover:bg-slate-300 focus:outline-none">
                  12/128GB
                </button>
                <button className="mr-2 rounded-md bg-slate-200 px-2 py-1 hover:bg-slate-300 focus:outline-none">
                  12/256GB
                </button>
              </div>
              {/* Quantity */}
              <button className="h-12 w-12 rounded-full bg-slate-300 text-2xl hover:bg-slate-400 focus:outline-none">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
type Data = ProductType;
export const getServerSideProps: GetServerSideProps<{ product: Data }> = async (
  context
) => {
  const res = await fetch(
    `https://dummyjson.com/products/${context.params?.id}`
  );
  const product: Data = await res.json();

  return {
    props: {
      product,
    },
  };
};
export default ViewProduct;
