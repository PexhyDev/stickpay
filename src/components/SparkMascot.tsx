import Image from "next/image";

type SparkVariant = "hero" | "primary" | "icon" | "light" | "dark" | "empty-state" | "loading";

type SparkMascotProps = {
  variant?: SparkVariant;
  className?: string;
  priority?: boolean;
  sizes?: string;
  alt?: string;
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

export function SparkMascot({ variant = "primary", className = "", priority = false, sizes, alt }: SparkMascotProps) {
  const asset = variants[variant];

  return (
    <Image
      src={asset.src}
      alt={alt ?? asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      className={className}
      style={{ width: "100%", height: "auto", maxWidth: "100%" }}
    />
  );
}
