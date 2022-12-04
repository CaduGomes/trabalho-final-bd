import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-col items-center justify-start">
      <h1 className="pt-5 text-4xl font-bold">UFSCarona</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
