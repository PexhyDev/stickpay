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
};

const variants: Record<SparkVariant, { src: string; width: number; height: number; alt: string }> = {
  hero: {
    src: "/mascot/spark-hero.png",
    width: 1440,
    height: 1080,
    alt: "Spark, mascote da StickPay representando velocidade e seguranca nos pagamentos Pix",
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
    alt: "Spark preparando a area para novos registros da StickPay",
  },
  loading: {
    src: "/mascot/spark-loading.png",
    width: 1024,
    height: 1024,
    alt: "Spark processando informacoes de pagamento na StickPay",
  },
};

const spotlightSizes: Record<NonNullable<SparkSpotlightProps["size"]>, { shell: string; image: string; sizes: string }> = {
  sm: {
    shell: "max-w-[168px] p-2",
    image: "rounded-md",
    sizes: "168px",
  },
  md: {
    shell: "max-w-[210px] p-2.5",
    image: "rounded-lg",
    sizes: "210px",
  },
  lg: {
    shell: "max-w-[252px] p-3",
    image: "rounded-lg",
    sizes: "252px",
  },
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
}: SparkSpotlightProps) {
  const sizeConfig = spotlightSizes[size];

  return (
    <div
      className={`spark-spotlight relative mx-auto w-full overflow-hidden rounded-lg border border-cyan-400/20 bg-slate-950/72 shadow-[0_18px_46px_rgba(2,6,23,0.28)] ${sizeConfig.shell} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(6,182,212,0.22),transparent_42%),linear-gradient(145deg,rgba(79,70,229,0.18),transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-x-8 bottom-2 h-10 rounded-full bg-cyan-400/14 blur-xl" aria-hidden="true" />
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
