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

    // set cart items
    let tempCartItems = [...cart].reduce((total, item) => {
      return (total += item.count);
    }, 0);
    console.log(tempCartItems);
    setCartItems(tempCartItems);

    // set subTotal and tax
    let tempSubTotal = [...cart].reduce((total, item) => {
      return (total += item.total);
    }, 0);

    tempSubTotal = parseFloat(tempSubTotal.toFixed(2));
    let tax = tempSubTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = tempSubTotal + tax;
    total = parseFloat(total.toFixed(2));

    setCartSubTotal(tempSubTotal);
    setCartTax(tax);
    setCartTotal(total);

    // setStoreProducts(flatteredProducts(products));
    // console.log(flatteredProducts(products));
  }, [cart]);

  // setSingleProduct
  const setProduct = (id) => {
    console.log(`set single product ${id}`);
  };

  // add to cart
  const addToCart = (id) => {
    let tempCart = [...cart];
    let tempProducts = [...storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = {...tempItem, count: 1, total};
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    setCart(tempCart);
    addTotals();
    syncStorage(tempCart);
    openCart();
  };

  // sync storage
  const syncStorage = (cart) => {
    return localStorage.setItem("cart", JSON.stringify(cart));
  };

  // add Totals
  const addTotals = () => {};

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

  // increase cart item
  const increment = (id) => {
    const tempCart = [...cart];
    const tempItem = tempCart.find((item) => item.id === id);
    tempItem.count++;
    tempItem.total = tempItem.count * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    setCart(tempCart);
    syncStorage(tempCart);
  };

  // decrease cart item
  const decrement = (id, count) => {
    if (count === 1) {
     removeItem(id);
     return;
    }
    const tempCart = [...cart];
    const tempItem = tempCart.find((item) => item.id === id);
    tempItem.count--;
    tempItem.total = tempItem.count * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    setCart(tempCart);
    syncStorage(tempCart);
  };

  // delete cart item
  const removeItem = (id) => {
    const tempCart = [...cart].filter((item) => {
      return item.id !== id;
    });
    setCart(tempCart);
    syncStorage(tempCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
    syncStorage([]);
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
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        increment,
        decrement,
        clearCart,
        removeItem,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
