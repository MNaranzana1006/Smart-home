import { useState } from "react";
import { useRouter } from "next/router";
import usersList from "../public/users.json";
import { UseMyContext } from "../components/Provider";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const checkEmailAndPassword = (event) => {
    event.preventDefault();
    const userData = usersList.users.find((user) => user.email === email);
    if (!userData) setError("wrong user email!");
    else if (userData.password !== password) setError("wrong password!");
    else {
      UseMyContext.user = userData;
      router.push("/home");
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gray-800 flex items-center justify-center transition-all ease-in-out duration-300">
      <form
        action="post"
        onSubmit={checkEmailAndPassword}
        className="flex flex-col space-y-10 p-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl text-white font-semibold">Login</h1>
          <p className="text-gray-600 text-sm">Please login first.</p>
        </div>
        <div className="space-y-8">
          <label htmlFor="email" className="w-full">
            <input
              className="w-full rounded-md px-4 py-2 shadow-md text-gray-800 placeholder-gray-300 focus:border-none"
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="asdfasdfasdf@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password" className="w-full">
            <input
              className="w-full rounded-md px-4 py-2 shadow-md text-gray-800 placeholder-gray-300 focus:border-none mt-4"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 text-md rounded-md"
          >
            LOGIN
          </button>
          <p className="text-red-500">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default login;
