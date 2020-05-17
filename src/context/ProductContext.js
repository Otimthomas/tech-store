import React from "react";
import flatteredProducts, {setFeatured} from "../utils/helpers";
import products from "./data/productData";

const getStorageCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {
  const [sidebar, setSidebar] = React.useState(false);
  const [sidecart, setSidecart] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);
  const [cart, setCart] = React.useState(getStorageCart());
  const [cartSubTotal, setCartSubTotal] = React.useState(0);
  const [cartTax, setCartTax] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [storeProducts, setStoreProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
  const [singleProduct, setSingleProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let newProducts = flatteredProducts(products);
    setStoreProducts(newProducts);
    let featured = setFeatured(newProducts);
    setFeaturedProducts(featured);
    setFilteredProducts(newProducts);

    // setStoreProducts(flatteredProducts(products));
    // console.log(flatteredProducts(products));
  }, []);

  // setSingleProduct
  const setProduct = id => {
    console.log(`set single product ${id}`);
  }

  // add to cart 
  const addToCart = (id) => {
    console.log(`item with id ${id} added to cart`)
  }

  // handle sidebar
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  // hande sideCart
  const handleSidecart = () => {
    setSidecart(!sidecart);
  };

  // close cart
  const closeCart = () => {
    setSidecart(false);
  };

  // open cart
  const openCart = () => {
    setSidecart(true);
  };

  return (
    <ProductContext.Provider
      value={{
        handleSidebar,
        handleSidecart,
        addToCart,
        setProduct,
        closeCart,
        openCart,
        sidebar,
        sidecart,
        cartItems,
        storeProducts,
        featuredProducts,
        filteredProducts,
        cart
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
