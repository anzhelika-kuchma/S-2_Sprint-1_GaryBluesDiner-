import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Order from "./Components/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
