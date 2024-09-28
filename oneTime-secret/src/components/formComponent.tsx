import clsx from "clsx";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: string) => void;
  message: string;
};

export const FormComponent: React.FC<Props> = ({
  onSubmit,
  onChange,
  message,
}) => {
  return (
    <div>
      <h2 className="font-bold text-3xl font-serif my-4">
        Paste a secret message below
      </h2>
      <form
        className="flex flex-col items-center gap-8"
        onSubmit={(e) => onSubmit(e)}
      >
        <textarea
          className="min-w-[560px] h-32 rounded-xl border border-[#aaaaaa] p-4 placeholder:opacity-50 text-xl"
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className={clsx(
            "rounded-lg border text-lg font-semibold bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus:outline-1 disabled py-2 px-4",
            { "opacity-50": message === "" }
          )}
        >
          Create a secret link
        </button>
      </form>
    </div>
  );
};
