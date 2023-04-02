import { GetServerSideProps } from "next";
import Head from "next/head";
import Breadcrumb from "~/components/Breadcrumb";
import Review from "~/components/Review";
import ImageSlider from "~/components/viewProduct/ImageSlider";
import Variant from "~/components/viewProduct/Variant";
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
            <div className=" sm:col-span-1">
              <img
                className="mx-auto block max-h-[80vh] max-w-full"
                src={product.thumbnail}
                alt="product"
              />
              {/* Image Slider */}
              <ImageSlider images={product.images} />
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
                {/* Variant map */}
                <Variant title="8/64GB" value="nai" />
                <Variant title="8/128GB" value="nai" />
                <Variant title="12/156GB" value="nai" />
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
