"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Jersey_10 } from "next/font/google";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null);
  const router = useRouter(); // Initialize router

  // OTP validation function
  const validateOTP = (otp: string) => {
    return /^[0-9]{6}$/.test(otp); // Ensures only 6 digits (no alphabets)
  };

  // Handle OTP verification
  const handleOTPVerification = () => {
    if (!validateOTP(otp)) {
      setMessage({ text: "! Enter Valid OTP", color: "#E44343" }); // Error message
    } else {
      setMessage({ text: "! Verification Successful", color: "#33E60B" }); // Success message
      setTimeout(() => {
        router.push("/success"); // Redirect to success.tsx after 1 second
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
          {/* OTP Verification Title */}
          <h2 className={`${jersey.className} text-[48px] text-white absolute top-[50px]`}>
            OTP Verification
          </h2>

          {/* Subtext: Enter OTP */}
          <p className={`${jersey.className} text-[28px] text-white absolute top-[180px] left-[35px]`}>
            Enter OTP:
          </p>

          {/* OTP Input Field */}
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
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

          {/* Submit OTP Button */}
          <button
            onClick={handleOTPVerification}
            className={`${jersey.className} w-[196px] h-[50px] bg-white text-black text-[40px] rounded-md absolute bottom-[60px] left-[102px] transition-all duration-300 hover:bg-black hover:text-white`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
