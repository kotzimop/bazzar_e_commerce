import { bagImg, cartImg, logoDark } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // Parse state from store (actually from what is the result of bazarSlice/addToCart)
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  // Calculate all the products added to cart
  const cartProducts = productData.reduce((acc, val) => {
    return acc + val.quantity;
  }, 0);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={bagImg} alt="bag" />
              <span className="absolute w-6 top-1.5 left-0 text-sm flex items-center justify-center font-semibold">
                {cartProducts}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : cartImg}
              alt="userLogo"
            />
          </Link>
          <p className="text-base font-titleFont font-semibold underline underline-offset-2">
            {userInfo ? userInfo.name : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
