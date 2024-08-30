import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext); // alert is an object with msg and type properties

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        <p className="flex text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
