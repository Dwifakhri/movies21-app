import React, { useEffect, useState } from "react";
import { ButtonWatch, ButtonFavorite } from "./Button";

function Card(props) {
  return (
    <div className="dark:bg-black flex flex-col justify-center p-4 shadow-lg rounded-lg border border-gray-200 dark:border-none md:hover:scale-110">
      <div className="h-full w-full cursor-pointer" onClick={props.onNavigate}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.image}`}
          alt={props.title}
        />
        <p
          className="text-black dark:text-white py-3 text-center px-5"
          onClick={props.onNavigate}
        >
          {props.title}
        </p>
      </div>
      <div className="my-3">
        <ButtonWatch
          onClick={props.clickTrailer}
          label="Watch Trailer"
        ></ButtonWatch>
      </div>
      <ButtonFavorite
        label={`${props.addRemove} Favorite`}
        onClick={props.addFavorite}
      ></ButtonFavorite>
    </div>
  );
}

export default Card;
