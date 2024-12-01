import React from "react";

const ErrorPage = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-9xl font-bold text-red-500">404</span>
            <span className="text-3xl font-bold text-gray-700">Page Not Found</span>
        </div>
    </>
  );
};

export default ErrorPage;
