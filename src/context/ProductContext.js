import React from "react";

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {
  const [sidebar, setSidebar] = React.useState(false);
  const [sidecart, setSidecart] = React.useState(true);
  const [cartItems, setCartItems] = React.useState(0)

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
        closeCart,
        openCart,
        sidebar,
        sidecart,
        cartItems
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
