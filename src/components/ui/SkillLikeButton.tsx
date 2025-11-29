"use client"
import clsx from "clsx"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | "a"
  href?: string
}

export default function SkillLikeButton({ as = "button", href, className, children, ...rest }: Props) {
  const base =
    // TODO: replace with the exact classes used by the Skills buttons
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition " +
    "border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/70 text-zinc-200"

  if (as === "a" && href) {
    return (
      <a 
      href={href} 
      className={clsx(base, className)} 
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
        {children}
      </a>
    )
  }
  return (
    <button className={clsx(base, className)} {...rest}>
      {children}
    </button>
  )
}