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

//ของแฟร์งงับ
import Test from "./components/Test.jsx";
import A2hero2 from "./components/A2hero2.jsx";
import A1hero from "./components/A1hero .jsx";
import A4comment from "./components/A4comment.jsx";
import A5video from "./components/A5video.jsx";
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
          <A1hero />
          <A2hero2 />
          <A4comment />
          <A5video />
          <Footer />
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
