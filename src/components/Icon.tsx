type IconName =
  | 'star'
  | 'shopping-cart'
  | 'person'
  | 'search'
  | 'shield'
  | 'home'
  | 'arrow-forward'
  | 'chat'
  | 'whatsapp'
  | 'instagram'
  | 'truck'
  | 'policy'
  | 'add'
  | 'check'
  | 'bolt'
  | 'close'
  | 'arrow-down';

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const commonProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'star':
      return (
        <svg {...commonProps}>
          <path
            d="M12 2.5 14.9 8.3 21.5 9.2 16.7 13.8 18.1 20.5 12 17.1 5.9 20.5 7.3 13.8 2.5 9.2 9.1 8.3 12 2.5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case 'shopping-cart':
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
          <path d="M3 4h2l2.2 9.3a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7" />
        </svg>
      );
    case 'person':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19c1.7-3 4.2-4.5 7-4.5s5.3 1.5 7 4.5" />
        </svg>
      );
    case 'search':
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="5.5" />
          <path d="M16 16l4.5 4.5" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3l7 3v5c0 4.2-2.8 8.2-7 10-4.2-1.8-7-5.8-7-10V6l7-3z" />
        </svg>
      );
    case 'home':
      return (
        <svg {...commonProps}>
          <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4v-7H9v7H5a1 1 0 0 1-1-1v-8.5z" />
        </svg>
      );
    case 'arrow-forward':
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...commonProps}>
          <path d="M5 18.5V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H9l-4 2.5z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg
          {...commonProps}
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 1.76.46 3.47 1.33 4.97L2 22l4.98-1.31c1.44.79 3.08 1.2 4.72 1.2 5.49 0 9.96-4.47 9.96-9.96S17.49 2.04 12 2.04zm4.53 13.38c-.22.62-.84 1.29-1.57 1.44-.41.11-.84.16-1.26.06-.36-.09-.8-.3-1.38-.58-1.64-.84-2.74-1.56-3.69-2.83-.57-.76-.86-1.11-.86-1.72 0-.56.19-.88.36-1.02.21-.18.47-.22.75-.1.25.12.52.27.8.46.25.17.5.31.74.45.27.15.56.1.74-.08.18-.18.76-.82.88-.92.13-.1.22-.23.29-.4.08-.16.03-.33-.04-.46-.08-.18-.67-1.63-.91-2.25-.24-.62-.49-.53-.73-.55-.18-.01-.38-.01-.57-.01-.21 0-.53.08-.79.37-.27.29-.99.99-.99 2.4 0 1.42 1.01 2.8 1.16 3 .15.2 2.01 3.23 4.86 4.52.67.29 1.2.46 1.62.6.68.21 1.3.19 1.78.11.54-.08 1.67-.69 1.91-1.35.24-.67.24-1.24.18-1.36-.06-.12-.23-.19-.47-.32z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'truck':
      return (
        <svg {...commonProps}>
          <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.5" />
          <circle cx="18" cy="18" r="1.5" />
        </svg>
      );
    case 'policy':
      return (
        <svg {...commonProps}>
          <path d="M7 4h7l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
          <path d="M14 4v5h5" />
          <path d="M9.5 13h5M9.5 16h5" />
        </svg>
      );
    case 'add':
      return (
        <svg {...commonProps}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case 'check':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 12.5l2 2 5-5" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...commonProps}>
          <path d="M13 2L5.5 12h4.3L9 22l8.2-11h-4.5L13 2z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'close':
      return (
        <svg {...commonProps}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg {...commonProps}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      );
    default:
      return null;
  }
}
