

const CartIcon = ({cartItems}) => {
  
    return (
        <div className="relative w-[28px] flex space-x-1">
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke={cartItems?"#ff5c01": "white"}
                  stroke-linecap="round"
                  stroke-width="1"
                  d="M4 7h16v16H4V7Zm4 2V5c0-2.21 1.795-4 4-4h0c2.21 0 4 1.795 4 4v4"
                />
              </svg>
        </div>
    )
}
export default CartIcon;