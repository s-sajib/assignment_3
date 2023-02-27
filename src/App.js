import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
