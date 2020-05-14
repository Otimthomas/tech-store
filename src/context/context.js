import React from "react";

const ProductContext = React.createContext();

const ProductProvider = ({children}) => {
  return <ProductContext.Provider value=''>{children}</ProductContext.Provider>;
};

export {ProductContext, ProductProvider};
