import { XCircle, CheckCircle } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <XCircle className="h-8 w-8 text-destructive" />
              <h3 className="font-headline text-2xl font-bold text-primary">
                The Problem
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Traditional finance and over-collateralized DeFi exclude billions
              by requiring significant capital upfront. This stifles innovation
              and economic mobility for creditworthy individuals and businesses
              who lack liquid assets for collateral.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              <h3 className="font-headline text-2xl font-bold text-primary">
                Our Solution
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              KIN Protocol unlocks capital by treating reputation as a valuable
              asset. By enabling trusted parties (Vouchers) to co-sign loans,
              we create a system where financial history and social trust, not
              just existing wealth, determine creditworthiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
