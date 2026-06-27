import { cn } from "@/lib/utils";

interface GoldRuleProps {
  className?: string;
  center?: boolean;
}

export function GoldRule({ className, center = false }: GoldRuleProps) {
  return (
    <div
      className={cn(
        "h-px w-12",
        "bg-gradient-to-r from-[#B8966A] to-transparent",
        center && "mx-auto",
        className
      )}
      aria-hidden="true"
    />
  );
}
