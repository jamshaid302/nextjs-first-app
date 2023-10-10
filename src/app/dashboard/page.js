"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "../page";

// export const metadata = {
//   title: "Dashboard Page",
//   description: "This is the dashboard page",
// };

export default function DashboardPage() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/get-images");
      if (res?.data?.images?.length) {
        setImages(res?.data?.images);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadFile = async () => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/upload-without-multer-s3",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res) {
        getImages();
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  //------------------ This code is for the signed url upload to s3 bucket ------------------//

  // const handleUploadFile = async () => {
  //   const res = await axios.post("http://localhost:4000/api/pre-signed-url", {
  //     name: file.name,
  //     type: file.type,
  //   });

  //   const { url } = res.data;
  //   console.log("url", url);
  //   try {
  //     await axios.put(url, file, {
  //       headers: {
  //         "Content-Type": file.type,
  //       },
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   alert("Upload success");
  // };

  return (
    <Page>
      <div className="mb-3 flex flex-col items-center p-6">
        <label
          htmlFor="formFile"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Default file input example
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
          id="formFile"
          name="file"
          onChange={handleFileChange}
        />
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6"
          onClick={handleUploadFile}
        >
          Upload
        </button>
      </div>
      <div className="flex flex-col items-center">
        {images?.map((image, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4">
            <img
              className="w-full"
              src={image?.signedUrl}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          // <Image
          //   key={index}
          //   className="h-auto max-w-full"
          //   src={image?.signedUrl}
          //   width={500}
          //   height={500}
          //   alt={`Picture ${index}`}
          // />
        ))}
      </div>
      <ToastContainer />
    </Page>
  );
}
