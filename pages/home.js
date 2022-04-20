import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { UseMyContext } from "../components/Provider";
import Navbar from "../components/Navbar";
import Image from "next/image";

const home = () => {
  const [user, setUser] = useState(UseMyContext.user || {});

  const router = useRouter();
  useEffect(() => {
    if (!user.name) router.push("/login");
  }, []);

  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[120vh] bg-black">
        <Image
          src="/heroImg.jpg"
          layout="fill"
          className="absolute inset-0 object-cover"
        />
        <div className="w-full h-full absolute bg-black/20" />
      </section>
    </div>
  );
};

export default home;