"use client";
import { Jersey_10 } from "next/font/google";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

export default function Success() {
  return (
    <div
      className="w-full h-[1024px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/2.jpg')" }}
    >
      <h1 className={`${jersey.className} text-[128px] text-white text-center`}>
        Congratulations, You Have<br/> Successfully Logged In
      </h1>
    </div>
  );
}
