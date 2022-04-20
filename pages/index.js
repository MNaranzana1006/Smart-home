import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UseMyContext } from "../components/Provider";
export default function Home() {
  const [user, setUser] = useState(UseMyContext.user);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/login");
    else router.push("/home");
  }, []);
  return <div>hi</div>;
}
