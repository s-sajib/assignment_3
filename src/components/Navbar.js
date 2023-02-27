import logo from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeRoute } from "../redux/navigation/actions";
const calcSum = (prev, current) => prev + current;

function Navbar() {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.reduce(calcSum, 0));

  function handleRouteChange(event, route) {
    event.preventDefault();
    dispatch(changeRoute(route));
  }

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="/"
            className="navHome"
            id="lws-home"
            onClick={(event) => handleRouteChange(event, "home")}
          >
            Home
          </a>
          <a
            href="/"
            className="navCart"
            id="lws-cart"
            onClick={(event) => handleRouteChange(event, "cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalItems}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
