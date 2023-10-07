"use client";
import { useRouter } from "next/navigation";

const Button = ({ text = "" }) => {
  const router = useRouter();

  const handleRoute = () => {
    if (text === "Sign In") router.push("/dashboard");
    else if (text === "Sign Up") router.push("/login");
  };

  return (
    <button
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      onClick={handleRoute}
    >
      {text}
    </button>
  );
};

export default Button;
