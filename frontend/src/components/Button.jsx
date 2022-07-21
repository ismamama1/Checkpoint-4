import React from "react";
import { Link } from "react-router-dom";

function Button({ link, content }) {
  return (
    <Link to={link}>
      <button
        type="button"
        className="bg-green text-black font-body font-semibold py-2 px-5 rounded-md drop-shadow-md hover:bg-lightgreen active:lightgreen"
      >
        {content}
      </button>
    </Link>
  );
}

export default Button;
