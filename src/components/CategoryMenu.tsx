import Scrollbars from "react-custom-scrollbars-2";
import { category } from "~/constants/data";

function CategoryMenu() {
  return (
    <Scrollbars universal={true} autoHide>
      <div className="pb-5">
        {category.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer">
              <h4 className=" px-2 py-1 text-[14px] font-medium hover:bg-slate-200">
                {item.name}
              </h4>
            </div>
          );
        })}
      </div>
    </Scrollbars>
  );
}

export default CategoryMenu;
