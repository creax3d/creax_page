import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export function Logo({ className = "", height = 30 }: { className?: string; height?: number }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Creax3D — Inicio">
      <img
        src="/brand/wordmark.webp"
        alt="Creax3D"
        height={height}
        style={{ height, width: "auto" }}
        className="select-none"
      />
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2 mt-5">{title}</h2>
      </div>
      {(copy || action) && (
        <div className="flex max-w-md flex-col items-start gap-5">
          {copy && <p className="lead text-[15px]">{copy}</p>}
          {action}
        </div>
      )}
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <Icon name="star" size={12} filled />
          </span>
        ))}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="glow-orb -top-32 right-0 h-[420px] w-[420px] opacity-70" />
      <div className="shell relative z-10">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title mt-6 max-w-4xl">{title}</h1>
        {copy && <p className="lead mt-7 max-w-2xl">{copy}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </header>
  );
}
