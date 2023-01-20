import { SubtitleProps } from "./subtitle.types";

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <h2 className="text-2xl font-medium text-center text-yellow-500">
      {children}
    </h2>
  );
};

export default Subtitle;
