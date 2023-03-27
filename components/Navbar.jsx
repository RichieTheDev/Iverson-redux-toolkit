import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex  sticky z-20 top-0 justify-between p-5 bg-teal-800 text-teal-50">
        <div className="flex">
          <Link to="/" className="text-2xl sm:text-3xl font-bold">
            Iversons <span className="text-amber-500">Store</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-1 mx-auto">
          <input type="search" className=" rounded-lg p-2" />
          <AiOutlineSearch size={25} />
        </div>
        <div className="flex space-x-8 text-xl font-bold ml-auto sm:mr-14">
          <p className="hidden lg:inline">Home</p>
          <p className="hidden lg:inline">About</p>

          <Link to="/cart" className="flex flex-row">
            <AiOutlineShoppingCart size={30} />
            <span>{amount}</span>
          </Link>
        </div>
      </div>
      <div className="flex font-medium p-4 pt-4 space-x-4 bg-teal-800 justify-evenly sm:justify-start text-teal-50">
        <button className="btn">Electronics</button>
        <button className="btn">Clothes</button>
        <button className="btn">Shoes</button>
        <button className="btn hidden sm:inline">Furnitures</button>
        <button className="btn hidden sm:inline">Others</button>
      </div>
    </>
  );
}

export default Navbar;
