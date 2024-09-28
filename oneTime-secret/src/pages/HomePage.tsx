import { useEffect, useState } from "react";
import { useGetUrl } from "../api/useGetUrl";
import { FormComponent } from "../components/formComponent";
import { UrlComponent } from "../components/urlComponent";

export const HomePage = () => {
  const [message, setMessage] = useState<string>("");
  const [url, setUrl] = useState<string>();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const { mutate: sendMessage, data } = useGetUrl();

  const handleChange = (text: string) => {
    setMessage(text);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
  };

  useEffect(() => {
    setUrl(data);
  }, [data]);

  const handleUrl = () => {
    setUrl(undefined)
  }

  const handleCopy = async () => {
    try {
      url && await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log("Failed to copy:", err);
    }
  };

  return url === undefined ? (
    <FormComponent
      onSubmit={handleSubmit}
      onChange={handleChange}
      message={message}
    />
  ) : (
    <UrlComponent
        onCopy={handleCopy}
        onClick={handleUrl}
      url={url}
      message={message}
      isCopied={isCopied}
    />
  );
};

// <>
//   <h2 className="font-bold text-3xl font-serif my-4">
//     Paste a secret message below
//   </h2>
//   <form
//     className="flex flex-col items-center gap-8"
//     onSubmit={(e) => handleSubmit(e)}
//   >
//     <textarea
//       className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
//       placeholder="Enter your message here..."
//       value={message}
//       onChange={(e) => handleChange(e.target.value)}
//     ></textarea>
//     <button
//       type="submit"
//       className={clsx(
//         "rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled py-2 px-4",
//         { "opacity-50": message === "" }
//       )}
//     >
//       Create a secret link
//     </button>
//   </form>
// </>

// <div className="flex flex-col gap-8">
//   <div>
//     <h4 className="text-left text-lg font-semibold mb-2">
//       Share this link
//     </h4>
//     <div className="flex rounded-sm border">
//       <input
//         value={url}
//         className="p-2 text-lg font-semibold w-[560px] h-15"
//         readOnly={true}
//       />
//       <button className="p-2" onClick={handleCopy}>
//         <img src={Copy} />
//       </button>
//     </div>
//   </div>
//   <div>
//     <h4 className="text-left text-lg font-semibold mb-2">Secret message</h4>
//     <textarea
//       className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
//       placeholder="Enter your message here..."
//       value={message}
//       readOnly={true}
//     ></textarea>
//   </div>
//   <button className="rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled  mt-4 py-2 px-4">
//     <Link to={"/"}>Create New Secret</Link>
//   </button>
//   {isCopied && (
//     <div className="absolute bottom-10 right-10 rounded-lg border bg-[#cccccc] text-[#1a1a1a] text-lg font-semibold py-2 px-8">
//       Url is copied!
//     </div>
//   )}
// </div>
