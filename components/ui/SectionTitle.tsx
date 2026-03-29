interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
}: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-2xl md:text-3xl font-extrabold leading-tight tracking-tight ${light ? "text-white" : "text-[#0D1226]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-sm md:text-base font-medium ${light ? "text-[#8E97B0]" : "text-[#8E97B0]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
