import type { PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<{
  imageSrc?: string;
  imageAlt?: string;
  title: ReactNode;
  metadata?: ReactNode;
  action?: ReactNode;
  className?: string;
}>;

export function Card({
  imageSrc,
  imageAlt = "",
  title,
  metadata,
  action,
  className = "",
  children,
}: CardProps) {
  return (
    <article
      className={[
        "group w-full overflow-hidden rounded-xl border border-white/10 bg-[#1d1d1d] shadow-[0_18px_38px_rgba(0,0,0,0.45)]",
        className,
      ].join(" ")}
    >
      {imageSrc ? (
        <div className="relative h-44 overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="space-y-4 p-4">
        {metadata ? <div>{metadata}</div> : null}

        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          {children ? <div className="text-sm text-zinc-300">{children}</div> : null}
        </div>

        {action ? <div className="pt-1">{action}</div> : null}
      </div>
    </article>
  );
}
