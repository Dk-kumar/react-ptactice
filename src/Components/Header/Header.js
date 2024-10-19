import { downArrow, logo, translate } from "../../Utils/Icons";
import Banner from "../Banner/Banner";
import ProductListing from "../ProductListing/ProductListing";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="Header_Container">
        <div className="Header_Wrapper">
          <div className="Header_Left">
            <span className="Logo">{logo()}</span>
            <span className="Heading">
              <h2>Genix Auctions</h2>
            </span>
          </div>

          <div className="Header_Right">
            <span className="Nav_Section">
              <nav>
                <span>Actions {downArrow()}</span>
                <span>Bidding {downArrow()}</span>
                <span>About Us {downArrow()}</span>
                <span className="Translate">
                  {translate()}English {downArrow()}
                </span>
              </nav>
            </span>
            <span className="Btn_Section">
              <button className="Login_Btn">Login</button>
              <button className="Started_Btn">Get Started</button>
            </span>
          </div>
        </div>
      </header>
      <Banner />

      <ProductListing />
    </>
  );
};

export default Header;
