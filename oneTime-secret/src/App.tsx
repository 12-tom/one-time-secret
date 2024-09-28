// import { useEffect, useState } from "react";
// import "./App.css";
// import { useGetUrl } from "./api/useGetUrl";
// import Copy from "./assets/copy.svg";
// import clsx from "clsx";

// function App() {
//   const [message, setMessage] = useState<string>("");
//   const [url, setUrl] = useState<string>("a");
//   const [isCopied, setIsCopied] = useState<boolean>(false);

//   const { mutate: sendMessage, data } = useGetUrl();

//   const handleChange = (text: string) => {
//     setMessage(text);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     sendMessage(message);
//   };

//   useEffect(() => {
//     setUrl(data);
//   }, [data]);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(url);
//       setIsCopied(true);
//       setTimeout(() => {
//         setIsCopied(false);
//       }, 2000);
//     } catch (err) {
//       console.log("Failed to copy:", err);
//     }
//   };

//   return url === undefined ? (
//     <>
//       <h2 className="font-bold text-3xl font-serif my-4">
//         Paste a secret message below
//       </h2>
//       <form
//         className="flex flex-col items-center gap-8"
//         onSubmit={(e) => handleSubmit(e)}
//       >
//         <textarea
//           className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
//           placeholder="Enter your message here..."
//           value={message}
//           onChange={(e) => handleChange(e.target.value)}
//         ></textarea>
//         <button
//           type="submit"
//           className={clsx('rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled py-2 px-4',
//             {"opacity-50":message === ""})}
//         >
//           Create a secret link
//         </button>
//       </form>
//     </>
//   ) : (
//     <div className="flex flex-col gap-8">
//       <div>
//         <h4 className="text-left text-lg font-semibold mb-2">
//           Share this link
//         </h4>
//         <div className="flex rounded-sm border">
//           <input
//             value={url}
//             className="p-2 text-lg font-semibold w-[560px] h-15"
//             readOnly={true}
//           />
//           <button className="p-2" onClick={handleCopy}>
//             <img src={Copy} />
//           </button>
//         </div>
//       </div>
//       <div>
//         <h4 className="text-left text-lg font-semibold mb-2">Secret message</h4>
//         <textarea
//           className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
//           placeholder="Enter your message here..."
//           value={message}
//           readOnly={true}
//         ></textarea>
//       </div>
//       {isCopied && (
//         <div className="absolute bottom-10 right-10 rounded-lg border bg-[#cccccc] text-[#1a1a1a] text-lg font-semibold py-2 px-8">
//           Url is copied!
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import {HomePage} from "./pages/HomePage";
import {SecretPage} from "./pages/SecretPage";
import Layout from "./components/layout";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
// import React from 'react';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout children />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "secret/:url", element: <SecretPage /> },
    ],
  },
]);

export default appRouter;
