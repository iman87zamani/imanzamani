import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "solid" | "ghost" | "text";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
  solid: cn(
    "bg-[#B8966A] text-[#08080A]",
    "hover:opacity-85",
    "font-bold"
  ),
  ghost: cn(
    "bg-transparent text-[#7A7068]",
    "border border-[rgba(237,229,216,0.13)]",
    "hover:border-[rgba(184,150,106,0.28)] hover:text-[#EDE5D8]",
    "font-semibold"
  ),
  text: cn(
    "bg-transparent text-[#B8966A]",
    "font-bold",
    "after:content-['→'] after:ml-2.5 after:transition-[margin] after:duration-300",
    "hover:after:ml-4"
  ),
};

const base = cn(
  "inline-flex items-center justify-center",
  "text-[11px] tracking-[0.20em] uppercase",
  "transition-all duration-200",
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#B8966A]",
  "cursor-large"
);

export function Button({
  href,
  onClick,
  variant = "solid",
  children,
  className,
  external = false,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    base,
    variant !== "text" && "px-9 py-[15px]",
    variants[variant],
    disabled && "opacity-40 pointer-events-none",
    className
  );

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
