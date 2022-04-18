import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0  bg-indigo-700 w-full p-2 text-gray-200">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="font-bold">
              Smart{" "}
              <span className="text-red-500 font-bold text-3xl">Home</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
