import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type IconWrapProps = {
  icon: React.ReactNode;
  className?: string;
};

export default function IconWrap({ icon, className }: IconWrapProps) {
  const renderedIcon = isValidElement<{ className?: string }>(icon)
    ? cloneElement(icon, {
        className: cn("h-5 w-5", icon.props.className),
      })
    : icon;

  return (
    <span
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-blue",
        className,
      )}
      aria-hidden="true"
    >
      {renderedIcon}
    </span>
  );
}
