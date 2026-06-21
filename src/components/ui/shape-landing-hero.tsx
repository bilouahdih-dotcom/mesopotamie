"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { Spotlight } from "@/components/Spotlight";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/[0.12]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border-2 border-black/[0.04] backdrop-blur-[2px]",
            "shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  subtitle,
  children,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.05] blur-3xl" />

      {/* Aurora animée */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] animate-aurora rounded-full bg-primary/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] animate-aurora rounded-full bg-amber-500/25 blur-[110px] [animation-delay:-6s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 animate-aurora rounded-full bg-[#d9534f]/20 blur-[120px] [animation-delay:-12s]" />

      {/* Wordmark géant en filigrane */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[26vw] font-bold leading-none tracking-tighter text-primary/[0.05]">
          MÉSO
        </span>
      </div>

      {/* Photos qui flottent */}
      {[
        { id: "photo-1561758033-d89a9ad46330", cls: "left-[5%] top-[20%] size-24 md:size-36", extra: "" },
        { id: "photo-1599487488170-d11ec9c172f0", cls: "right-[7%] top-[16%] size-20 md:size-28", extra: "hidden sm:block" },
        { id: "photo-1606491956689-2ea866880c84", cls: "right-[12%] bottom-[12%] size-24 md:size-40", extra: "" },
        { id: "photo-1633321702518-7feccafb94d5", cls: "left-[11%] bottom-[10%] size-16 md:size-24", extra: "hidden sm:block" },
      ].map((b, i) => (
        <motion.div
          key={b.id}
          aria-hidden
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
          transition={{
            opacity: { duration: 1, delay: 0.5 + i * 0.15 },
            scale: { duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 7 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className={cn(
            "pointer-events-none absolute z-0 overflow-hidden rounded-[2rem] border-4 border-white shadow-elevated",
            b.cls,
            b.extra
          )}
        >
          <img
            src={`https://images.unsplash.com/${b.id}?auto=format&fit=crop&w=400&q=80`}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}

      {/* Halo curseur */}
      <Spotlight />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-primary/[0.14]" className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-[#d9534f]/[0.12]" className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-amber-500/[0.12]" className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-orange-500/[0.10]" className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-primary/[0.10]" className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 md:mb-10"
          >
            <Circle className="h-2 w-2 fill-primary text-primary" />
            <span className="text-sm tracking-wide text-muted-foreground">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="mb-6 font-display text-4xl font-semibold tracking-[-0.02em] sm:text-6xl md:mb-8 md:text-8xl">
              <span className="text-foreground">{title1}</span>
              <br />
              <span className="text-shimmer">{title2}</span>
            </h1>
          </motion.div>

          {subtitle && (
            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-muted-foreground sm:text-lg md:text-xl">
                {subtitle}
              </p>
            </motion.div>
          )}

          {children && (
            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              {children}
            </motion.div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export { HeroGeometric };
