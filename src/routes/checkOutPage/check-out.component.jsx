import { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext";

let cartItemsArray
const CheckOut = () => {
  const { cartTotal ,cartItems,addItemsToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)

  if (cartItems) {
    cartItemsArray = cartItems;
  }
  if(cartItems.length!==0){

  
  return (
    <section class="h-screen bg-[#181818] py-12 sm:py-16 lg:py-20 overflow-y-scroll">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-semibold text-white">Your Cart</h1>
        </div>

        <div class="mx-auto mt-8 max-w-2xl md:mt-12">
          <div class="bg-white shadow ">
            <div class="px-4 py-6 sm:px-8 sm:py-10">
              <div class="flow-root">
                <ul class="-my-8">
                  {cartItemsArray.map((cartItem) => (
                      <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                        <div class="shrink-0">
                          <img
                            class="h-24 w-24 max-w-full rounded-lg object-cover"
                            src={cartItem.image_url}
                            alt=""
                          />
                        </div>

                        <div class="relative flex flex-1 flex-col justify-between">
                          <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div class="pr-8 sm:pr-5">
                              <p class="text-base font-semibold text-gray-900">
                                {cartItem.product_name}
                              </p>
                              <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                {cartItem.price}
                              </p>
                            </div>

                            <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                ${cartItem.price}
                              </p>

                              <div class="sm:order-1">
                                <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button onClick={() => removeItemFromCart(cartItem)} class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                    -
                                  </button>
                                  <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    {(cartItem.quantity) ? cartItem.quantity : '' }
                                  </div>
                                  <button onClick={() => addItemsToCart(cartItem)} class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div onClick={() => deleteItemFromCart(cartItem)} class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              type="button"
                              class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                            >
                              <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                  class=""
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Subtotal</p>
                  <p class="text-lg font-semibold text-gray-900">${cartTotal}</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-400">Shipping</p>
                  <p class="text-lg font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  <span class="text-xs font-normal text-gray-400">USD</span>{" "}
                  {cartTotal + 8.00}
                </p>
              </div>

              <div class="mt-6 text-center">
                <button
                  type="button"
                  class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
                    }
                    else {return <div className="text-white flex justify-center items-center text-7xl font-syne h-screen">Your Cart is Empty</div>}
};

export default CheckOut;
