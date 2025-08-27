import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Users, ShieldCheck, Handshake } from 'lucide-react';

export function ProtocolSection() {
  return (
    <section id="protocol" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            A New Paradigm in Lending
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            KIN Protocol introduces a tri-party model that replaces the need for
            over-collateralization with a system based on trust and reputation.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="mt-4 font-headline">Borrowers</CardTitle>
              <CardDescription>
                Access capital based on your on-chain and off-chain reputation,
                without locking up excessive assets.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="mt-4 font-headline">Lenders</CardTitle>
              <CardDescription>
                Deploy capital with confidence, earning yield on loans vetted
                by trusted vouchers.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Handshake className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="mt-4 font-headline">Vouchers</CardTitle>
              <CardDescription>
                Stake your reputation to vouch for borrowers you trust, earning
                rewards for successful repayments.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
