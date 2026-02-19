import "./brand.css";

type BrandProps = {
  dark?: boolean;
  compact?: boolean;
};

export function Brand({ dark = false, compact = false }: BrandProps) {
  const className = ["brand", dark ? "brand--dark" : "", compact ? "brand--compact" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      className={className}
      src={dark ? "/logo-full-dark.jpg" : "/logo-full-light.png"}
      alt="SEOTech.dev"
      loading="eager"
      decoding="async"
    />
  );
}
