import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, remove } from "../features/cart/cartSlice";

const Cart = () => {
  const { Items, total } = useSelector((state) => state.cart);
  const addedItems = Items.filter((item) => item.amount > 0); // Filter added items
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {addedItems.length > 0 ? (
          addedItems.map((item) => {
            return (
              <div key={item.id} className="sm:mx-10 shadow-md mx-2 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <img
                    className="sm:h-36 h-1/2 w-1/2 sm:w-36 object-cover py-3"
                    src={item.image}
                    alt="/"
                  />
                  <div className="flex sm:ml-28 flex-col items-center">
                    <p className="text-3xl font-bold">{item.title}</p>
                    <p className="font-medium text-lg">${item.price}</p>
                    <button
                      onClick={() => {
                        dispatch(remove(item.id));
                      }}
                      className="text-blue-400 "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h1 className="border-b py-10 text-center text-4xl">
              Your cart is empty !!!
            </h1>
            <button to="/" className="btn ">
              Go Back to Home
            </button>
          </>
        )}
        <div
          className="fixed bottom-0 w-full p-6 z-10 bg-[#1e1e1e] flex justify-center
                    items-center mx-auto  bg-opacity-20
                    backdrop-blur-3xl rounded drop-shadow-2xl"
        >
          Total: ${total}
        </div>
      </div>
    </>
  );
};

export default Cart;
