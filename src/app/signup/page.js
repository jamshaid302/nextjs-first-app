"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

// export const metadata = {
//   title: "Signup Page",
//   description: "This is the signup page",
// };

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function SignupPaage() {
  const router = useRouter();

  const [data, formData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    formData((pre) => ({ ...pre, [name]: e.target.value }));
  };

  const handleSignup = () => {
    router.push("/login");
  };

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Signup
          </h1>
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={data?.email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={data?.password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="mt-2">
              {/* <Button text="Sign Up" /> */}
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
