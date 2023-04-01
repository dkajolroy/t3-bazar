const FlashSell = () => {
  return (
    <div className="flex justify-between bg-teal-600 px-2 py-2">
      {/* Left */}
      <div className="items-center sm:flex">
        <h4 className="mr-5 text-xl text-white sm:mr-10 sm:text-2xl">
          Flash Sell
        </h4>
        <h4 className="text-xl text-slate-300">Ending Time: </h4>
        <div className="flex">
          <div className="mx-1 bg-white p-2">10</div>
          <div className="mx-1 bg-white p-2">10</div>
          <div className="mx-1 bg-white p-2">10</div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col justify-end sm:justify-center">
        <button className="bg-white px-2 py-1 font-medium text-teal-700 transition hover:bg-slate-300 focus:outline-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default FlashSell;
