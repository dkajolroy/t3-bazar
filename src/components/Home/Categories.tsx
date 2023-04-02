import { categories } from "~/constants/data";
type Props = {
  item: (typeof categories)[0];
};
function Categories({ item }: Props) {
  return (
    <>
      <div className="flex cursor-pointer flex-col items-center bg-white py-2 hover:shadow-md">
        <img className="h-20" src={item.image} alt="image" />
        <h3 className="my-2 text-center text-sm text-slate-800">{item.name}</h3>
      </div>
    </>
  );
}

export default Categories;
