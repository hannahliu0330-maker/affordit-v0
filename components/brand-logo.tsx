import Image from "next/image";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: {
    mark: "h-9 w-9",
    image: "h-8 w-8",
    text: "text-xl",
  },
  md: {
    mark: "h-10 w-10",
    image: "h-9 w-9",
    text: "text-xl",
  },
  lg: {
    mark: "h-11 w-11",
    image: "h-10 w-10",
    text: "text-lg",
  },
} as const;

export function BrandLogo({
  className,
  showText = true,
  size = "sm",
}: {
  className?: string;
  showText?: boolean;
  size?: keyof typeof sizeClasses;
}) {
  const classes = sizeClasses[size];

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-border/70",
          classes.mark,
        )}
      >
        <Image
          src="/affordit-logo.png"
          alt="AffordIt logo"
          width={44}
          height={44}
          className={cn("object-contain", classes.image)}
          priority={size !== "lg"}
        />
      </span>
      {showText && (
        <span className={cn("font-bold tracking-tight text-foreground", classes.text)}>
          Affordit
        </span>
      )}
    </span>
  );
}
