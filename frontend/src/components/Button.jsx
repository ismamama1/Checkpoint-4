import React from "react";
import { Link } from "react-router-dom";

function Button({ link, content }) {
  return (
    <Link to={link}>
      <button
        type="button"
        className="bg-green text-black font-bold py-2 px-4 rounded-md drop-shadow-md hover:bg-lightgreen active:lightgreen"
      >
        {content}
      </button>
    </Link>
  );
}

export default Button;
