import React from "react";
import Button from "./button";


function About() {
  return (
    
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 w-full">
          <div class="flex flex-wrap overflow-hidden md:-mx-3 lg:-mx-3 xl:-mx-3">
            <div class="self-center w-full overflow-hidden py-4 md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
              <h2 className="text-left font-black text-3xl py-4">About us</h2>
              <p>Coffeemap is the go to place for coffee lover to discover new cafés in Berlin. We enable you to explore the coffee scene of berlin and find the perfect café for your occasion. <br /><br />Starting with a simple listing of cafés we will implement reviews, updates by café owners and other cool features as soon as possible. <br /><br />Enjoy your coffee!</p>
              <div className="py-3"></div>
              <Button buttontext="Learn more"/>
            </div>
            <div class="self-center w-full overflow-hidden md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
              <img alt="latte art" src="/img/about.jpg" no-repeat />
            </div>
          </div>
        </div>
    

    );
}

export default About;
