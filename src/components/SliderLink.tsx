import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

type Props = {
  text: string;
  to: string;
  className?: string;
};

export default function SliderLink({ text, to, className }: Props) {
  return (
    <Link
      className={cn(
        "focus-ring relative p-1 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-right after:bg-primary after:transition-[scale] after:[scale:0_1] after:hover:origin-left after:hover:[scale:1_1]",
        className,
      )}
      to={to}
    >
      {text}
    </Link>
  );
}
