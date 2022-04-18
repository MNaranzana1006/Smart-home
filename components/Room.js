import Link from "next/link";

const Room = ({ room }) => {
  return (
    <div className="group relative shadow-sm">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={room.imageSrc}
          alt={room.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="absolute top-1/2 left-1/3">
        <Link href={room.imageAlt}>
          <a className="text-2xl font-bold text-indigo-500 shadow-sm hover:underline">
            {room.name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Room;
