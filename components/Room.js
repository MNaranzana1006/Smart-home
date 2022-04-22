import React from "react";
import Image from "next/image";
const Room = ({ room }) => {
  return (
    <div className="z-10 bg-gray-200/30 rounded-xl shadow-md overflow-hidden p-4 text-center group transition-all ease-in-out duration-300 cursor-pointer">
      <div className="relative w-full h-80 group-hover:scale-105 transition-all ease-in-out duration-300">
        <Image
          src={room.imageUrl}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-xl text-black font-bold mt-4 group-hover:text-black/50">
        {room.name}
      </h2>
      <p className="text-md text-black font-semibold">
        Devices: {room.devices.length}
      </p>
    </div>
  );
};

export default Room;
