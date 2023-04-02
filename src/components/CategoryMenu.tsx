import Scrollbars from "react-custom-scrollbars-2";
import { category } from "~/constants/data";
import Category from "./Home/Category";

function CategoryMenu() {
  return (
    <Scrollbars universal={true} autoHide>
      <div className="pb-5">
        {category.map((item, index) => {
          return <Category key={index} item={item} />;
        })}
      </div>
    </Scrollbars>
  );
}

export default CategoryMenu;
