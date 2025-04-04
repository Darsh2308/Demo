"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Jersey_10 } from "next/font/google";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null);
  const router = useRouter(); // Initialize router

  // Email validation function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle button click
  const handleOTPRequest = () => {
    if (!validateEmail(email)) {
      setMessage({ text: "! Enter Valid Email ID", color: "#E44343" }); // Error Message
    } else {
      setMessage({ text: "! OTP Sent Successfully", color: "#33E60B" }); // Success Message
      setTimeout(() => {
        router.push("/otp"); // Redirect to otp.tsx after 1 sec
      }, 1000);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute w-full h-[1024px] bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/1.jpeg')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center">
        {/* Welcome Text */}
        <h1 className={`${jersey.className} text-[128px] text-white whitespace-nowrap mb-10`}>
          Welcome to Demo
        </h1>

        {/* Centered Rectangle */}
        <div className="w-[401px] h-[549px] bg-[#6E6E6E] opacity-95 rounded-[5%] relative flex flex-col items-center justify-center">
          {/* Login Title */}
          <h2 className={`${jersey.className} text-[48px] text-white absolute top-[50px]`}>
            Login
          </h2>

          {/* Subtext: Enter Email */}
          <p className={`${jersey.className} text-[28px] text-white absolute top-[180px] left-[35px]`}>
            Enter Email:
          </p>

          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${jersey.className} w-[330px] h-[50px] bg-white text-black text-left pl-4 text-2xl rounded-md outline-none placeholder-gray-500 absolute top-[230px] left-[35px]`}
          />

          {/* Validation Message */}
          {message && (
            <p
              className={`${jersey.className} text-[15px] absolute top-[290px] left-[35px]`}
              style={{ color: message.color }}
            >
              {message.text}
            </p>
          )}

          {/* Get OTP Button */}
          <button
            onClick={handleOTPRequest}
            className={`${jersey.className} w-[196px] h-[50px] bg-white text-black text-[40px] rounded-md absolute bottom-[60px] left-[102px] transition-all duration-300 hover:bg-black hover:text-white`}
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
}
