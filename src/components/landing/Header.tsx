
'use client';

import { useState } from 'react';
import { KinLogo } from '@/components/icons/KinLogo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#protocol', label: 'Protocol' },
    { href: '#features', label: 'Features' },
    { href: '#impact', label: 'Impact' },
    // { href: '#ai-guidance', label: 'AI Guidance' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <KinLogo className="h-8 w-8" />
            <span className="font-headline text-lg font-bold sm:inline-block">
              KIN Protocol
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground/60 transition-colors hover:text-foreground/80 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:transition-transform after:duration-[5000ms] after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden sm:flex">
              APP - coming soon
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b pb-4">
                      <Link
                        href="/"
                        className="flex items-center space-x-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <KinLogo className="h-8 w-8" />
                        <span className="font-headline text-lg font-bold">
                          KIN Protocol
                        </span>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </div>
                    <nav className="mt-6 flex flex-col space-y-4">
                      {navLinks.map(link => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto pt-6">
                       <Button variant="outline" className="w-full">
                         APP - coming soon
                       </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
