import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-sky",
        className,
      )}
      aria-hidden="true"
    >
      SMC
    </span>
  );
}
