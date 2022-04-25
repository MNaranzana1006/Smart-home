import { useState } from "react";
import { useRouter } from "next/router";
import usersList from "../public/users.json";

const signUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const checkEmailAndPassword = async (event) => {
    event.preventDefault();
    if (password === password2) {
      usersList.users.push({
        id: usersList.users[usersList.users.length - 1].id + 1,
        name: name,
        email: email,
        password: password,
      });
      console.log(usersList);
      await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify(usersList),
        headers: {
          "Content-Type": "application/JSON",
        },
      });
      router.push("/login");
    } else {
      setError("Wrong password!");
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gray-800 flex items-center justify-center transition-all ease-in-out duration-300">
      <form
        action="post"
        onSubmit={checkEmailAndPassword}
        className="flex flex-col space-y-10 p-8"
      >
        <div>
          <h1 className="text-4xl text-white font-semibold">Sign Up</h1>
        </div>
        <div className="">
          <label htmlFor="name" className="w-full">
            <input
              className="w-full rounded-md px-4 py-2 shadow-md text-gray-800 placeholder-gray-300 focus:border-none"
              value={name}
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="w-full">
            <input
              className="w-full rounded-md px-4 py-2 shadow-md text-gray-800 placeholder-gray-300 focus:border-none mt-4"
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
          <label htmlFor="password2" className="w-full">
            <input
              className="w-full rounded-md px-4 py-2 shadow-md text-gray-800 placeholder-gray-300 focus:border-none mt-4"
              type="password"
              name="password2"
              id="password2"
              placeholder="password again"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 text-white bg-teal-500 text-md rounded-md"
          >
            SIGN UP
          </button>
          <p className="text-red-500">{error}</p>
        </div>
      </form>
    </div>
  );
};

export default signUp;
