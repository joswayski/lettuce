import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.908-.621.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 19c8-1 13-8 14-14-7 1-13 6-14 14Z" />
      <path d="M8 12c2 2 4 3 7 4" />
    </Icon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a3 3 0 0 1 0 5.74" />
    </Icon>
  );
}

export function HashIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 9h14M5 15h14M10 3 8 21M16 3l-2 18" />
    </Icon>
  );
}

export function VolumeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10v4h4l5 4V6l-5 4H4Z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7" />
    </Icon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Icon>
  );
}

export function MicIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </Icon>
  );
}

export function HeadphoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="5" height="7" rx="2" />
      <rect x="16" y="13" width="5" height="7" rx="2" />
    </Icon>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M17.8 6.2l-1.4 1.4M7.6 16.4 6.2 17.8" />
    </Icon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4h6l-1 7h3l-5 9-5-9h3L9 4Z" />
    </Icon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </Icon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5" />
      <path d="M9 10h.01M15 10h.01" />
    </Icon>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M12 10v10M4 14h16M12 10c-2-4-6-4-6-1s4 2 6 1Z" />
      <path d="M12 10c2-4 6-4 6-1s-4 2-6 1Z" />
    </Icon>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4 12 16-8-6 16-2-6-8-2Z" />
    </Icon>
  );
}

export function HouseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10.5V20h12v-9.5" />
    </Icon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3Z" />
    </Icon>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 3 5 14h7l-1 7 8-11h-7l1-7Z" />
    </Icon>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4a8 8 0 1 0 0 16h1.5a2 2 0 0 0 0-4H13a1.5 1.5 0 0 1 0-3h3A8 8 0 0 0 12 4Z" />
      <circle cx="8" cy="10" r=".8" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="7.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7.8" r=".8" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2l1.4 1.4M16.4 16.4l1.4 1.4M17.8 6.2l-1.4 1.4M7.6 16.4 6.2 17.8" />
    </Icon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M18 14.5A7 7 0 1 1 10 5a6 6 0 0 0 8 9.5Z" />
    </Icon>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m7 10 5 5 5-5" />
    </Icon>
  );
}
