import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; className?: string };

export function PageTitle({ children, className }: Props) {
  return (
    <h1 className={cn("py-8 text-2xl sm:text-4xl lg:text-6xl", className)}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className }: Props) {
  return (
    <h2 className={cn("py-5 text-xl sm:text-3xl lg:text-4xl", className)}>
      {children}
    </h2>
  );
}
