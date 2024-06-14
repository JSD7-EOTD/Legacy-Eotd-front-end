import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductHero from "./components/ProductHero.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import CardMapping from "./components/CardMapping.jsx";
import Filter from "./components/Filter.jsx";
import Footer from "./components/Footer.jsx";
import ChangePage from "./components/ChangePage.jsx";
import D2_login from "./components/D2_login.jsx"
import D3_createAccount from "./components/D3_createAccount.jsx"
import ConfirmAndPay from "./components/ConfirmAndPay"

function App() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=9"
        );
        // const data = await response.data;

        const productData = [];
        for (const product of response.data.results) {
          const res = await axios.get(product.url);
          productData.push(res.data);
        }
        // console.log(productData);
        setProductList(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProduct();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const router = createBrowserRouter([
    // หน้าmain ของพี่แฟร้งน้าาา
    {
      path: "/",
      element: (
        <div>
          <Navbar />
        </div>
      ),
    },
    // หน้าproductb ของอ้วนน้า
    {
      path: "/Product",
      element: (
        <div>
          <Navbar />
          <ProductHero />
          <div className="flex w-full justify-center">
            <div className="w-[432px] flex justify-start ">
              <Filter />
            </div>
            <div className="w-[1168px]">
              <CardMapping productList={productList} />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ChangePage />
          </div>
          <Footer />
        </div>
      ),
    },
    {
      path: "/logIn",
      element: (
        <div>
          <D2_login />
          <D3_createAccount />
          <ConfirmAndPay />
        </div>
      ),
    },
    // หน้าlogin ของบิวงับ
    {
      path: "",
      element: (
        <div>
          <Navbar />
        </div>
      ),
    },
    {
      path: "",
      element: (
        <div>
          <Navbar />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
