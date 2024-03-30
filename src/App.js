import Shop from "./Pages/Shop";
import ShopCaregory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSign from "./Pages/LoginSign";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import headphon_bunner from "./components/Assets/headphone-1.png";
import laptop_bunner from "./components/Assets/Laptop_1.png";
import keyboard_bunner from "./components/Assets/keyboard-5.png";
import mouse_bunner from "./components/Assets/mouse-2.png";



function App() {
  return (
    <>
      <BrowserRouter >

        <Header />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/headphone" element={<ShopCaregory bunner={headphon_bunner} category="headphone" />} />
          <Route path="/laptop" element={<ShopCaregory bunner={laptop_bunner} category="laptop" />} />
          <Route path="/Keyboard" element={<ShopCaregory bunner={keyboard_bunner} category="Keyboard" />} />
          <Route path="/Mouse" element={<ShopCaregory bunner={mouse_bunner} category="mouse" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSign />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
