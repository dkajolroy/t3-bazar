import { category } from "~/constants/data";

type Props = {
  item: (typeof category)[0];
};
function Category({ item }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-slate-200">
      <i className="bi bi-bag"></i>
      <h4 className="text-[14px] font-medium ">{item.name}</h4>
    </div>
  );
}

export default Category;
