import Layout from "../Layouts/layout.jsx";
import Checkout1 from "../Pages/Checkout1";
import CheckOut2 from "../Pages/checkout2.jsx";
import CheckOut3 from "../Pages/checkout3.jsx";
import CheckOut4 from "../Pages/checkout4.jsx";
import ProductDetail from "../Pages/ProductDetail";
import ProductListingPage from "../Pages/ProductListingPage.jsx";
import ShoppingCart from "../Pages/ShoppingCart.jsx";
// import Home from "../pages/Home"; // Example component for the home route

const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: <ProductListingPage />, 
      },
      {
        path: "productCatalog", 
        element: <ProductListingPage />, 
      },
      {
        path: "/about", 
        element: <ProductListingPage />, 
      },
      {
        path: "/contactus", 
        element: <ProductListingPage />, 
      },
      {
        path: "/productPage", 
        element: <ProductDetail />, 
      },
      {
        path: "/shoppingCart", 
        element: <ShoppingCart />, 
      },
      {
        path: "/cart1", 
        element: <Checkout1 />, 
      },
      {
        path: "/cart2", 
        element: <CheckOut2 />, 
      },
      {
        path: "/cart3", 
        element: <CheckOut3 />, 
      },
      {
        path: "/cart4", 
        element: <CheckOut4 />, 
      },
    ],
  },
];



export default Routes;
