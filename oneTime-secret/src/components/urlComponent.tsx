import Copy from "../assets/copy.svg";

type Props = {
  onCopy: () => void;
  onClick: () => void;
  url: string;
  message: string;
  isCopied: boolean;
};

export const UrlComponent: React.FC<Props> = ({
  onCopy,
  onClick,
  url,
  message,
  isCopied,
}) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <h4 className="text-left text-lg font-semibold mb-2">
          Share this link
        </h4>
        <div className="flex rounded-sm border">
          <input
            value={url}
            className="p-2 text-lg font-semibold w-[560px] h-15"
            readOnly={true}
          />
          <button className="p-2" onClick={onCopy}>
            <img src={Copy} />
          </button>
        </div>
      </div>
      <div className="flex flex-col  w-full">
        <h4 className="text-left text-lg font-semibold mb-2">Secret message</h4>
        <textarea
          className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
          placeholder="Enter your message here..."
          value={message}
          readOnly={true}
        ></textarea>
      </div>
      <button
        className="rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled w-fit mt-4 py-2 px-4"
        onClick={onClick}
      >
        Create Another Secret
      </button>
      {isCopied && (
        <div className="absolute bottom-10 right-10 rounded-lg border bg-[#cccccc] text-[#1a1a1a] text-lg font-semibold py-2 px-8">
          Url is copied!
        </div>
      )}
    </div>
  );
};
