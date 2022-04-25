import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
const Room = ({ room }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [deviceName, setDeviceName] = useState("");

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const addDevice = () => {
    const newDevice = {
      id: !room.devices ? 1 : room.devices[room.devices.length - 1] + 1,
      name: deviceName,
    };
    if (!room.devices) room.devices = [];
    room.devices.push(newDevice);
    setDeviceName("");
    closeModal();
  };

  return (
    <div
      className="z-10 bg-gray-200/30 rounded-xl shadow-md overflow-hidden p-4 text-center group transition-all ease-in-out duration-300 cursor-pointer"
      onClick={openModal}
    >
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
      <div className="flex justify-around">
        <p className="text-md text-black font-semibold">
          Devices: {room.devices.length}
        </p>
        <div>
          {room.devices.map((device) => (
            <p
              key={room.devices.id}
              className="text-md text-black font-semibol"
            >
              {device.name}
            </p>
          ))}
        </div>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="absolute inset-0 w-full h-full bg-black/75"></div>
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Add new device.
            </Dialog.Title>
            <div className="mt-2">
              <input
                type="text"
                className="text-sm text-gray-500 w-full rounded-md focus:border-none"
                placeholder="Device name"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={addDevice}
              >
                add
              </button>
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ml-2"
                onClick={closeModal}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Room;
