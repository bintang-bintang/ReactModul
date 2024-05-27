import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>

      <Layout />
      <Routes>

        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;