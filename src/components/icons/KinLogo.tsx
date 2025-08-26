import Image from 'next/image';

export function KinLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/kinlogo.jpg"
      alt="KIN Protocol Logo"
      width={40}
      height={40}
      className={className}
    />
  );
}
