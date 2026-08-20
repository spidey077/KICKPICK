type BrandLogoProps = {
  className?: string;
  compact?: boolean;
  hideLabel?: boolean;
  hideImageOnDesktop?: boolean;
};

export function BrandLogo({ className = '', compact = false, hideLabel = false, hideImageOnDesktop = false }: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/LOGO.jpeg"
        alt="KICKPICK.PK logo"
        className={`${compact ? 'h-10 w-10' : 'h-14 w-14 md:h-16 md:w-16'} rounded-full object-cover ring-1 ring-white/50 ${hideImageOnDesktop ? 'md:hidden' : ''}`}
      />
      {!hideLabel ? (
        <span className="brand-wordmark whitespace-nowrap text-2xl font-black italic uppercase leading-none tracking-[-0.08em] drop-shadow-md md:text-3xl">
          <span className="text-white">KICK</span><span className="text-primary">PICK</span>
        </span>
      ) : null}
    </div>
  );
}
