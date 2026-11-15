import type { SVGProps } from "react";

export type IconName =
  | "code"
  | "layers"
  | "mobile"
  | "cart"
  | "sparkles"
  | "cube"
  | "arrowUpRight"
  | "arrowRight"
  | "check"
  | "menu"
  | "close"
  | "mail"
  | "phone"
  | "instagram"
  | "whatsapp"
  | "telegram"
  | "template"
  | "software"
  | "asset"
  | "preset"
  | "kit"
  | "course"
  | "globe"
  | "clock"
  | "pin"
  | "star";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  filled?: boolean;
};

const strokePaths: Partial<Record<IconName, React.ReactNode>> = {
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 5.5h2" />
      <path d="M11.5 18.5h1" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.2 10.2A2 2 0 0 0 9.16 16h8.1a2 2 0 0 0 1.96-1.6L21 7H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M19 3v3M17.5 4.5h3M5 17v2.5M3.75 18.25h2.5" />
    </>
  ),
  cube: (
    <>
      <path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" />
      <path d="m4 7.4 8 4.6 8-4.6" />
      <path d="M12 12v9.2" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.6 3h2.2l1.6 4.2-2 1.5a12 12 0 0 0 6.9 6.9l1.5-2L21 15.2v2.2A2.6 2.6 0 0 1 18.4 20C10.4 20 4 13.6 4 5.6A2.6 2.6 0 0 1 6.6 3Z" />
  ),
  instagram: (
    <>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.4 6.6h.01" />
    </>
  ),
  template: (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M3 9h18M9 9v11.5" />
    </>
  ),
  software: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="m7 9 2 2-2 2M12.5 13H17" />
    </>
  ),
  asset: (
    <>
      <path d="m12 3 7.5 4.3v9.4L12 21l-7.5-4.3V7.3L12 3Z" />
      <path d="M12 12 4.5 7.3M12 12l7.5-4.7M12 12v9" />
    </>
  ),
  preset: (
    <>
      <circle cx="9" cy="9" r="5.5" />
      <circle cx="16" cy="16" r="4.5" />
    </>
  ),
  kit: (
    <>
      <path d="M4 8h16v11H4z" />
      <path d="M9 8V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V8" />
      <path d="M4 12h16" />
    </>
  ),
  course: (
    <>
      <path d="M3 6.5 12 3l9 3.5-9 3.5-9-3.5Z" />
      <path d="M6.5 8.2V14c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3V8.2" />
      <path d="M21 6.5V13" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: <path d="m12 3.5 2.5 5.4 5.9.7-4.4 4 1.2 5.9-5.2-3-5.2 3 1.2-5.9-4.4-4 5.9-.7L12 3.5Z" />,
};

export function Icon({ name, size = 20, filled, ...rest }: Props) {
  if (name === "telegram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.73 1.13-1.48.7l-4.1-3.02-1.97 1.9c-.22.2-.41.38-.81.38Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
        <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2.1 22l5.02-1.6a9.85 9.85 0 0 0 4.92 1.3h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.35-.54.06-1.04.25-3.5-.73-2.96-1.18-4.83-4.24-4.98-4.44-.15-.2-1.19-1.59-1.19-3.03 0-1.44.76-2.15 1.03-2.44.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.3.38-.43.5-.14.15-.28.3-.12.59.16.29.72 1.19 1.55 1.93 1.06.94 1.95 1.23 2.23 1.37.28.15.44.12.6-.07.17-.2.7-.82.89-1.1.19-.29.38-.24.64-.14.26.09 1.68.79 1.97.94.29.14.48.22.55.34.07.13.07.75-.17 1.44Z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {strokePaths[name]}
    </svg>
  );
}
