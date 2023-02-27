import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  const currentPage = useSelector((state) => state.navigation);
  return (
    <div className="App">
      <Navbar />
      {currentPage === "home" ? <Products /> : <Cart />}
    </div>
  );
}

export default App;
