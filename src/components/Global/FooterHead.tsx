function FooterHead() {
  return (
    <div className="bg-teal-800 py-5 text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="col-span-1">
            <div>
              <h4 className="font-medium">Customer Care</h4>
              <ul className="list-none">
                <li className="text-sm">Help Center</li>
                <li className="text-sm">How to Buy</li>
                <li className="text-sm">Contact Us</li>
                <li className="text-sm">Returns & Refunds</li>
                <li className="text-sm">Terms & Conditions</li>
              </ul>
            </div>
            <div className="mt-5 ">
              <h4 className="font-medium">Earn With Bazar</h4>
              <ul className="list-none">
                <li className="text-sm">Bazar University</li>
                <li className="text-sm">Sell on Bazar</li>
                <li className="text-sm">Code of Conduct</li>
                <li className="text-sm">Join the Bazar Affiliate Program</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mt-5 ">
              <h4 className="font-medium">Bazar</h4>
              <ul className="list-none">
                <li className="text-sm">About Bazar</li>
                <li className="text-sm">Digital Payments</li>
                <li className="text-sm">Bazar Blog</li>
                <li className="text-sm">Bazar Cares</li>
                <li className="text-sm">Bazar Mart</li>
                <li className="text-sm">Privacy Policy</li>
                <li className="text-sm">Bazar App</li>
                <li className="text-sm">Bazar Exclusives</li>
                <li className="text-sm">Hungrynaki Food Delivery</li>
                <li className="text-sm">Bazar Donates</li>
                <li className="text-sm">Bazar BPL Live</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 ">
              <img
                className="w-24 rounded-lg"
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1nvAvXMFY.1VjSZFnXXcFHXXa.png"
                alt="qr"
              />
              <div>
                <img
                  className="w-20 rounded-lg bg-white p-2"
                  src="/logo.png"
                  alt="logo"
                />
                <p>Happy Shopping </p>
                <p>Download App</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <img
                className="max-w-[200px]"
                src="https://seeklogo.com/images/A/app-store-google-play-logo-4A2747BF5E-seeklogo.com.png"
                alt="store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHead;
