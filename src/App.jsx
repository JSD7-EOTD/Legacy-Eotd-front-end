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

import Display from "./components/display.jsx";
import Description from "./components/description.jsx";
import ReviewSection from "./components/review.jsx";
import Suggest from "./components/suggest.jsx";

import FilterMobile from "./components/FilterMobile.jsx";

// Part E ของ mc ครัช
import E1_dropdown from "../src/components/E1_dropdown.jsx";
import E2_categories from "../src/components/E2_categories.jsx";
import E3_personalInfo from "../src/components/E3_personalInfo.jsx";
import E4_loginAndSecurity from "../src/components/E4_loginAndSecurity.jsx";
import E5_myPayments from "../src/components/E5_myPayments.jsx";
import E8_trackingOrders from "../src/components/E8_trackingOrders.jsx";

//ของแฟร์งงับ
import Test from "./components/Test.jsx";
import A2hero2 from "./components/A2hero2.jsx";
import A1hero from "./components/A1hero .jsx";
import A4comment from "./components/A4comment.jsx";
import A5video from "./components/A5video.jsx";
import D2_login from "./components/D2_login.jsx";
import D3_createAccount from "./components/D3_createAccount.jsx";
import ConfirmAndPay from "./components/ConfirmAndPay";
import Cart from "./components/Cart.jsx";

function App() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //Validation
  const [formData, setFormData] = useState({
    displayName: "", //
    fullName: "", //
    phone: "", //
    email: "", //
    address: "", //
    cardNumber: "", //
    cardName: "", //
    expirationDate: "",
    cvc: "",
  });

  const [validateError, setValidateError] = useState({});
  // API
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await axios.get(
          "https://store-crud.onrender.com/api/product"
        );
        // const data = await response.data;
        // console.log(response);
        const productData = [];
        for (const product of response.data) {
          productData.push(product);
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
  // End API

  // Validate Functoin
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.displayName.trim()) {
      validationErrors.displayName = "Display name is required";
    }
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Fullname is required";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Your phone number is required";
    } else if (formData.phone.length !== 10) {
      validationErrors.phone = "Your phone number should be at 10";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.address.trim()) {
      validationErrors.address = "Address is required";
    }
    if (!formData.cardNumber.trim()) {
      validationErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.length === 16) {
      validationErrors.cardNumber = "Card number should be at 16";
    }
    if (!formData.cardName.trim()) {
      validationErrors.cardName = "Card name is required";
    }
    if (!formData.expirationDate.trim()) {
      validationErrors.expirationDate = "Expiration date is required";
    } else if (formData.expirationDate.length !== 4) {
      validationErrors.expirationDate = "Expiration date should be at 4";
    }
    if (!formData.cvc.trim()) {
      validationErrors.cvc = "CVC is required";
    } else if (formData.cvc.length !== 3) {
      validationErrors.cvc = "CVC should be at 3";
    }

    setValidateError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

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
          <div className="flex flex-col lg:flex-row w-full lg:justify-center">
            <div className="w-full lg:w-[432px] lg:flex lg:justify-start hidden ">
              <Filter />
            </div>
            <div className="w-full flex justify-center lg:hidden">
              <FilterMobile />
            </div>
            <div className="w-full lg:w-[1168px]">
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
    //product info page ของขั่ย
    {
      path: "/product/:id",
      element: (
        <div>
          <div className="mb-24">
            <Navbar />
          </div>
          <Display />
          <ReviewSection />
          <Suggest />
          <div>
            <Footer />
          </div>
        </div>
      ),
    },
    // {
    //   path: "/product_info",
    //   element: (
    //     <div>
    //       <div className="mb-24">
    //         <Navbar />
    //       </div>
    //       <Display />
    //       <Description />
    //       <ReviewSection />
    //       <Suggest />
    //       <div>
    //         <Footer />
    //       </div>
    //     </div>
    //   ),
    // },
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
      path: "/Cart",
      element: (
        <div>
          <Navbar />
          <Cart />
          <div className="pt-8">
            <Footer />
          </div>
        </div>
      ),
    },
    // PART E mc คร้าบ
    {
      path: "/User",
      element: (
        <div>
          <Navbar />
          <div className="mt-24 container mx-auto flex gap-10 py-10 px-5 sm:px-10 md:px-20 lg:px-40 relative">
            <div className="hidden lg:block max-w-xs sticky">
              <E2_categories />
            </div>

            <div className="flex flex-col w-full">
              <E1_dropdown />
              <div className="flex flex-col gap-10">
                <E3_personalInfo
                  errors={validateError}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
                <E4_loginAndSecurity />
                <E5_myPayments
                  errors={validateError}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
                <E8_trackingOrders />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
