import produuct from '../assets/produuct.png';
import produuuct from '../assets/p1.webp';
import women from '../assets/p5.avif';
import boy from '../assets/boy.png';
import Image from 'next/image';
import React from 'react';

const SecondPag = () => {
  return (
    <div className="w-full mt-[100px]">
      {/* Heading and Text */}
      <div className="text-center mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold"> EDITORS PIC</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
        Problems trying to resolve the conflict between 
        </p>
      </div>

      {/* Flex Container with 3 Divs */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
        {/* 1st Div */}
        <div className="flex-[2] sm:flex-[3] max-w-[30%] relative h-[350px] sm:h-[400px] bg-gray-200">
          <Image
            src={boy}
            alt="Image 1"
            width={400}
            height={300}
            objectFit="cover"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* White box with name */}
          <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-lg bg-white w-[160px] h-[45px] flex items-center justify-center">
            Boy
          </div>
        </div>

        {/* 2nd Div */}
        <div className="flex-1 max-w-[240px] sm:w-[260px] relative h-[350px] sm:h-[400px] bg-gray-200">
          <Image
            src={women}
            alt="Image 2"
            width={400}
            height={300}
            objectFit="cover"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* White box with name */}
          <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-lg bg-white w-[160px] h-[45px] flex items-center justify-center">
            Men
          </div>
        </div>

        {/* 3rd Div with 2 images */}
        <div className="flex-1 max-w-[240px] sm:w-[260px] flex flex-col gap-4 relative h-[100px] sm:h-[260px] bg-gray-200">
          {/* 1st Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={produuuct}
              alt="Image 3.1"
              width={300}  /* Reduced width */
              height={225} /* Reduced height */
              objectFit="cover"
              className="w-[260px]  h-[190px] object-cover rounded-lg"
            />
            {/* White box with name */}
            <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-lg bg-white w-[160px] h-[45px] flex items-center justify-center">
            ACCESSORIES
            </div>
          </div>

          {/* 2nd Image in 3rd div */}
          <div className="relative flex-1">
            <Image
              src={produuct}
              alt="Image 3.2"
              width={300}  /* Reduced width */
              height={225} /* Reduced height */
              objectFit="cover"
              className="w-[260px] h-[190px] object-cover rounded-lg"
            />
            {/* White box with name */}
            <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 text-center text-black font-bold text-lg bg-white w-[160px] h-[45px] flex items-center justify-center">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPag;