import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../features/cart/cartSlice";

const Item = ({ image, price, title, id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.Items.find((item) => item.id === id)
  );
  return (
    <div className="bg-white shadow-md rounded-md h-full">
      <div>
        <img src={image} alt={title} className="h-64 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-medium mb-2">{title}</h2>
          <p className="text-gray-700">${price}</p>
          <button
            onClick={() => {
              dispatch(increase({ id }));
            }}
            className="btn mt-2"
          >
            Add to Cart({item?.amount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
