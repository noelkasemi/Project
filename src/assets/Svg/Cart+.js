import React from "react";

function CartPlus({style, onClick}) {
  return (
    <svg
    onClick={onClick}
    className={`${style}`}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <path fill="none" d="M0 0h48v48H0zm36.62 12L31.1 22z"></path>
      <path d="M22 18h4v-6h6V8h-6V2h-4v6h-6v4h6v6zm-8 18c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm20 0c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-19.65-6.5c0-.09.02-.17.06-.24l1.8-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.72-14.02L38.83 8h-.01l-2.21 4-5.51 10H17.07l-.26-.54L12.32 12l-1.9-4-1.89-4H2v4h4l7.2 15.17-2.71 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5z"></path>
    </svg>
  );
}

export default CartPlus;