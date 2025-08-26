import { Button } from '@/components/ui/button';
import { ArrowDown, PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="relative container z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl">
              Financial Trust, Redefined.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl lg:mx-0">
              KIN Protocol is a decentralized, undercollateralized lending
              platform that creates a system where financial history and social
              trust, not just existing wealth, are the keys to securing credit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                <a href="#ai-guidance">Get AI Guidance</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#protocol">
                  Learn More <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-primary/50 bg-primary/10">
            <div className="text-center">
                <PlayCircle className="mx-auto h-12 w-12 text-primary/80" />
                <p className="mt-4 text-muted-foreground">Explainer video coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
