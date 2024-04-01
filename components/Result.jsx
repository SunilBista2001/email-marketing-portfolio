import Image from "next/image";
import React from "react";

const resultImg = [
  "/result1.jpeg",
  "/result2.jpeg",
  "/result4.jpeg",
  "/result3.jpeg",
];

export default function Result() {
  return (
    <div className="about-container">
      <div className="flex flex-col ">
        <h2 className="text-lg">
          Some of my remarkable results working with DTC Brand:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resultImg.map((img, idx) => (
            <Image
              src={img}
              key={idx}
              alt="Sunil's personal headshot"
              width={700}
              height={700}
              objectFit="contain"
              className="cursor-pointer hover:scale-110 duration-500 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
