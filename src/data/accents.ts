export type Accent = "cyan" | "green" | "fuchsia";

export const accentTokens: Record<Accent, { hex: string; rgb: string; ink: string }> = {
  cyan: { hex: "#56fefe", rgb: "86, 254, 254", ink: "#02191a" },
  green: { hex: "#02fc02", rgb: "2, 252, 2", ink: "#021a02" },
  fuchsia: { hex: "#ff00fe", rgb: "255, 0, 254", ink: "#1b001b" },
};
