import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import roger_img from "../Assets/Images/MB_Roger_Whiteside.jpg";

const About = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div class="flex flex-col h-screen w-full justify-start justify-items-center content-center items-center place-content-center">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        About Us
      </div>
      <div class="flex flex-row w-2/3 items-start rounded-xl p-3 ">
        <div class="flex w-1/2 flex-col justify-center items-center mr-3">
          <p class="font-bold">Roger Whiteside</p>
          <p class="font-bold">Former CEO of Gregg’s</p>
          <p class="font-bold">Our Founder</p>
          <img
            className="flex w-3/4 font-bold text-black text-4xl rounded-md"
            src={roger_img}
          />
          <p class="text-left">
            After leaving the sausage roll industry, I found another passion in
            the form of weapons, toys and galatic items. Allowing kids to be
            able to play with each other, allowing adults to take each other out
            and allowing The Sith to be able to rule over the galaxy with an
            iron fist is a passion and brings warmth and comfort to my heart.
            However I also wanted to be able to revoloutinise the industry and
            allow for people to be able to use our products without breaking the
            bank. That is why I allow for people to be able to sell their
            products to us and we sell them at a discounted price that is much
            below the market value. We here take pride in ourselves that you can
            do anything you want should you believe. So feel free to browse our
            collection and buy what you want.
          </p>
        </div>
        <div class="flex w-1/2 flex-col justify-center items-center ml-3">
          <p class="font-bold">Our Services</p>
          <img
            className="flex w-3/4 font-bold text-black text-4xl rounded-md"
            src={roger_img}
          />
          <ul class="list-disc text-left">
            <li>Trade In</li>
            <li>Buying Weapons</li>
            <li>State of the Art Training Ground</li>
            <li>Toy Pit</li>
            <li>Ball Pit</li>
            <li>Celebrity Rooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
