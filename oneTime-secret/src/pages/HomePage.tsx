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
    setMessage("")
  }

  const handleCopy = async () => {
    try {
      url && await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
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