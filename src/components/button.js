import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="inline-flex rounded-md shadow">
            <Link to={props.url}
              className="inline-flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500"
            >
              {props.buttontext}
            </Link>
          </div>
  );
}

export default Button;
