"use client";

export default function Error({ error, reset }) {
  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <h1 className="text-6xl font-bold">Error {statusCode}</h1>
    //   <p className="text-2xl">
    //     {statusCode
    //       ? `An error ${statusCode} occurred on server`
    //       : "An error occurred on client"}
    //   </p>
    // </div>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Error</h1>
      <p className="text-2xl">Something went wrong</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Try Again
      </button>
    </div>
  );
}
