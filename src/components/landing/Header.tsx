import { KinLogo } from '@/components/icons/KinLogo';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <KinLogo className="h-6 w-6" />
            <span className="font-headline text-lg font-bold sm:inline-block">
              KIN Protocol
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Features
          </Link>
          <Link
            href="#impact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Impact
          </Link>
          <Link
            href="#ai-guidance"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            AI Guidance
          </Link>
        </nav>
      </div>
    </header>
  );
}
