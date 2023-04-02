import FooterBottom from "./FooterBottom";
import FooterHead from "./FooterHead";

function Footer() {
  return (
    <div className="bg-slate-200 pb-20 pt-5 ">
      <FooterHead />
      <div className="container">
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
