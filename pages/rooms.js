import Room from "../components/Room";
import Link from "next/link";

const Rooms = () => {
  const roomNames = [
    {
      name: "Living room",
      id: 1,
      imageSrc: "livingroom.svg",
      imageAlt: "livingroom",
    },
    { name: "Kitchen", id: 2, imageSrc: "kitchen.svg", imageAlt: "kitchen" },
    {
      name: "Sleeping room",
      id: 3,
      imageSrc: "sleepingroom.svg",
      imageAlt: "sleepingroom",
    },
  ];
  return (
    <div className="container max-w-7xl h-screen mx-auto flex items-center justify-between pt-10">
      <div
        className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
      lg:grid-cols-4 xl:gap-x-8"
      >
        {roomNames.map((room) => (
          <Room room={room} key={room.id} />
        ))}
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src="/addNew.svg"
              alt="add new"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="absolute top-1/2 left-1/3">
            <Link href="">
              <a className="text-2xl font-bold text-indigo-500 shadow-sm hover:underline">
                add new Room
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
