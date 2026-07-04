import Image from "next/image";

type SparkVariant = "hero" | "primary" | "icon" | "light" | "dark" | "empty-state" | "loading";

type SparkMascotProps = {
  variant?: SparkVariant;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  alt?: string;
};

type SparkSpotlightProps = Omit<SparkMascotProps, "className"> & {
  className?: string;
  imageClassName?: string;
  size?: "sm" | "md" | "lg";
  mode?: "panel" | "hero" | "minimal";
};

const variants: Record<SparkVariant, { src: string; width: number; height: number; alt: string }> = {
  hero: {
    src: "/mascot/spark-hero.png",
    width: 1440,
    height: 1080,
    alt: "Spark, mascote da StickPay representando velocidade e segurança nos pagamentos Pix",
  },
  primary: {
    src: "/mascot/spark-primary.png",
    width: 1024,
    height: 1024,
    alt: "Spark, mascote oficial da StickPay",
  },
  icon: {
    src: "/mascot/spark-icon.png",
    width: 1024,
    height: 1024,
    alt: "Avatar do Spark, mascote da StickPay",
  },
  light: {
    src: "/mascot/spark-light.png",
    width: 1024,
    height: 1024,
    alt: "Spark em versao para tema claro",
  },
  dark: {
    src: "/mascot/spark-dark.png",
    width: 1024,
    height: 1024,
    alt: "Spark em versao para tema escuro",
  },
  "empty-state": {
    src: "/mascot/spark-empty-state.png",
    width: 1024,
    height: 1024,
    alt: "Spark preparando a área para novos registros da StickPay",
  },
  loading: {
    src: "/mascot/spark-loading.png",
    width: 1024,
    height: 1024,
    alt: "Spark processando informações de pagamento na StickPay",
  },
};

const spotlightSizes: Record<NonNullable<SparkSpotlightProps["size"]>, { shell: string; image: string; sizes: string }> = {
  sm: {
    shell: "max-w-[164px] p-2.5",
    image: "rounded-[10px]",
    sizes: "(min-width: 1024px) 164px, 42vw",
  },
  md: {
    shell: "max-w-[208px] p-3",
    image: "rounded-[12px]",
    sizes: "(min-width: 1024px) 208px, 48vw",
  },
  lg: {
    shell: "max-w-[252px] p-3.5",
    image: "rounded-[14px]",
    sizes: "(min-width: 1024px) 252px, 56vw",
  },
};

const spotlightModes: Record<NonNullable<SparkSpotlightProps["mode"]>, string> = {
  panel:
    "border-cyan-300/20 bg-slate-950/72 shadow-[0_18px_46px_rgba(2,6,23,0.26),0_0_34px_rgba(6,182,212,0.08)]",
  hero:
    "border-cyan-300/25 bg-slate-950/50 shadow-[0_22px_56px_rgba(2,6,23,0.28),0_0_42px_rgba(6,182,212,0.14)]",
  minimal:
    "border-slate-700/70 bg-slate-950/54 shadow-[0_14px_34px_rgba(2,6,23,0.2)]",
};

export function SparkMascot({ variant = "primary", className = "", priority = false, quality, sizes, alt }: SparkMascotProps) {
  const asset = variants[variant];

  return (
    <Image
      src={asset.src}
      alt={alt ?? asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={`select-none object-contain ${className}`}
      style={{ width: "100%", height: "auto", maxWidth: "100%" }}
    />
  );
}

export function SparkSpotlight({
  variant = "dark",
  className = "",
  imageClassName = "",
  priority = false,
  quality = 100,
  sizes,
  alt,
  size = "md",
  mode = "panel",
}: SparkSpotlightProps) {
  const sizeConfig = spotlightSizes[size];

  return (
    <div
      className={`spark-spotlight spark-spotlight-${mode} relative mx-auto w-full overflow-hidden rounded-lg border ${spotlightModes[mode]} ${sizeConfig.shell} ${className}`}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(6,182,212,0.24),transparent_43%),radial-gradient(circle_at_82%_78%,rgba(79,70,229,0.18),transparent_36%),linear-gradient(145deg,rgba(15,23,42,0.12),rgba(2,6,23,0.54))]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-7 bottom-2 h-9 rounded-full bg-cyan-300/16 blur-lg" aria-hidden="true" />
      <SparkMascot
        variant={variant}
        alt={alt}
        priority={priority}
        quality={quality}
        sizes={sizes ?? sizeConfig.sizes}
        className={`relative z-10 ${sizeConfig.image} ${imageClassName}`}
      />
    </div>
  );
}
