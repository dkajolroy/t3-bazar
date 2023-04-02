import { categories } from "~/constants/data";

function Categories() {
  return (
    <>
      <div className="grid grid-cols-8 gap-1">
        {categories.map((item, index) => (
          <div className="flex flex-col items-center bg-white py-2">
            <img className="h-20" src={item.image} alt="image" />
            <h3 className="my-2 text-center text-sm text-slate-800">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
