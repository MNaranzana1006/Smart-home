import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { UseMyContext } from "../components/Provider";
import Navbar from "../components/Navbar";
import Room from "../components/Room";
import { Dialog } from "@headlessui/react";

const Home = () => {
  let [user, setUser] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  let [inputRoomName, setInputRoomName] = useState("");
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const addNewRoom = () => {
    var obj = {
      id: !user.rooms ? 1 : user.rooms[user.rooms.length - 1].id + 1,
      name: inputRoomName,
      imageUrl: "/livingRoom.jpg",
      devices: [],
    };
    if (!user.rooms) user.rooms = [];
    user.rooms.push(obj);
    setInputRoomName("");
    closeModal();
  };

  const router = useRouter();
  useEffect(() => {
    if (UseMyContext.user) {
      setUser(UseMyContext.user);
    } else router.push("/login");
  }, []);

  const logOut = () => {
    setUser({});
    router.push("/login");
  };
  return (
    <div>
      <Navbar user={user} logOut={logOut} openModal={openModal} />
      <section className="relative container mx-auto">
        <h2 className="mt-40 text-xl mx-4 px-2 font-semibold text-center  text-gray-500 underline decoration-red-300">
          Your rooms.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4 px-4 gap-8">
          {user && user.rooms ? (
            user.rooms.map((room) => <Room room={room} key={room.id} />)
          ) : (
            <div className="w-full h-screen flex items-center justify-center -translate-y-40 md:col-span-2 lg:col-span-3">
              <h3 className="text-2xl font-semibold">Add new room.</h3>
            </div>
          )}
        </div>
      </section>
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
              Add new room.
            </Dialog.Title>
            <div className="mt-2">
              <input
                type="text"
                className="text-sm text-gray-500 w-full rounded-md focus:border-none"
                placeholder="room name"
                value={inputRoomName}
                onChange={(e) => setInputRoomName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={addNewRoom}
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

export default Home;
