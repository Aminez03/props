import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
//   console.log(props);
  return (
    <div>
      {React.Children.toArray(props.list.map((car) => <ProductCard krhba={car} />))}
    </div>
  );
};

export default ProductList;
