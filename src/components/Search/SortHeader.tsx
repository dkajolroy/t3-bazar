function SortHeader() {
  return (
    <div className="flex flex-col-reverse justify-between border-b border-slate-200  py-5 md:flex-row md:items-center">
      {/* Searched text */}
      <div>
        <span className="text-sm text-slate-600">
          1861 items found for "Searched Text"
        </span>
      </div>
      {/* Sort and View */}
      <div className="flex items-center justify-between gap-5 md:justify-normal">
        <div className="flex items-center">
          <span className=" text-slate-700">Sort By:</span>
          <select className="ml-2 rounded-md border border-slate-400 p-2 text-slate-600 focus:outline-none">
            <option value="match">Best Match</option>
            <option value="lowPrice">Price Low to High</option>
            <option value="overPrice">Price High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className=" text-slate-700">View:</span>
          <button className="flex text-2xl text-slate-700 focus:outline-none">
            <i className="bi bi-grid"></i>
          </button>
          <button className="flex text-2xl text-slate-700 focus:outline-none">
            <i className="bi bi-list-task"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortHeader;
