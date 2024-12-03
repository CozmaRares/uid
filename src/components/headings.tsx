import { cn } from "@/lib/utils";

type Props = {
  title: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
};

export function PageTitle({
  title,
  titleClassName,
  description,
  descriptionClassName,
  className,
}: Props) {
  return (
    <div className={cn("border-b py-4", className)}>
      <h1 className={cn("text-4xl lg:text-6xl", titleClassName)}>{title}</h1>
      {description && (
        <p
          className={cn("text-2xl text-muted-foreground", descriptionClassName)}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionTitle({
  title,
  titleClassName,
  description,
  descriptionClassName,
  className,
}: Props) {
  return (
    <div className={cn("py-5", className)}>
      <h2 className={cn("text-2xl lg:text-4xl", titleClassName)}>{title}</h2>
      {description && (
        <p
          className={cn("text-2xl text-muted-foreground", descriptionClassName)}
        >
          {description}
        </p>
      )}
    </div>
  );
}
