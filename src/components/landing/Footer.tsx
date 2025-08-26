import { KinLogo } from '@/components/icons/KinLogo';

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center space-x-2">
          <KinLogo className="h-8 w-8" />
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KIN Protocol. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
