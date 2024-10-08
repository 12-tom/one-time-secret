import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetMessage } from "../api/useGetMessage";
import {ErrorComponent} from "../components/errorComponent";

export const SecretPage = () => {
  const [message, setMessage] = useState<string>("")
  const { mutate: getMessage } = useGetMessage();
  
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  
  useEffect(() => {
    getMessage(id, {
      onSuccess: (data) => {
        setMessage(data)
      }
    });
  }, []);

  return (
    message !== null?
    <>
      <div>
        <h2 className="font-bold text-3xl font-serif my-4">
          You have a Secret message!
        </h2>
        <textarea
          className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
          value={message}
          readOnly={true}
        ></textarea>
      </div>
      <button className="rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled  mt-4 py-2 px-4">
        <Link to={'/'}>Create New Secret</Link>
      </button>
      </> :
      <ErrorComponent />
  );
};
