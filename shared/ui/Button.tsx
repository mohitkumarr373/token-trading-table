import React from "react";
import { clsx } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"ghost"|"outline" };

export function Button({ className, variant="default", ...rest }: Props) {
  const base = "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors";
  const styles = {
    default: "bg-brand text-white hover:opacity-90",
    ghost: "bg-transparent hover:bg-white/5",
    outline: "border border-border hover:bg-white/5"
  }[variant];
  return <button className={clsx(base, styles, className)} {...rest} />;
}
