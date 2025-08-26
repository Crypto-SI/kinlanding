import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex h-[80vh] min-h-[500px] items-center justify-center text-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="relative container z-10 mx-auto px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl">
          Financial Trust, Redefined.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          KIN Protocol is a decentralized, undercollateralized lending platform
          that leverages reputation as a form of capital.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#ai-guidance">Get AI Guidance</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#protocol">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
