import { ReactNode } from "@tanstack/react-router";

type Props = {
  children: ReactNode;
};

export default function MainNav({ children }: Props) {
  return (
    <ul className="hidden items-center justify-center gap-8 md:flex">
      {children}
    </ul>
  );
}
