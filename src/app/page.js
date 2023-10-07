"use client";
import RootLayout from "./layout";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ children }) {
  const [data, setData] = useState([]);
  const router = useRouter();

  const getAPIData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <RootLayout>
      <div>
        <Header />
        {children ? (
          children
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-bold ml-5 ">User Data Table</h2>
            <table className="min-w-full mt-4 border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border border-slate-600 ...">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border border-slate-600 ...">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider border border-slate-600 ...">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user?.id} className="bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-black border border-slate-700">
                      {user?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black border border-slate-700">
                      {user?.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black border border-slate-700">
                      {user?.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </RootLayout>
  );
}
