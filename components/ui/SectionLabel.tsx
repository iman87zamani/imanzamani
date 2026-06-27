import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-semibold tracking-[0.28em] uppercase",
        "text-[#B8966A] mb-4",
        className
      )}
    >
      {children}
    </p>
  );
}
