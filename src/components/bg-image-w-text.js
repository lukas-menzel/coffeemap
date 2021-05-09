import React from "react";
import Button from "./button"

function BGImageText(props) {
  return (
    <div className="w-full py-48 bg-cover flex" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bg-header-home.jpg'})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="flex flex-wrap overflow-hidden md:-mx-1 lg:-mx-2 xl:-mx-2 h-full">
            <div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 self-center">
                <h1 className="text-6xl text-white justify-self-center">{props.headline}</h1>
                <h2 className="text-4xl text-white justify-self-center">{props.subheadline}</h2>
                <div className="py-2">
                <Button buttontext="Register" url="/register" />
                </div>
            </div>
            <div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">

            </div>
            </div>
        </div>
    </div>
  );
}

export default BGImageText;
