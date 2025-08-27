import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { FileText, UserCheck, PiggyBank, BadgeCheck } from 'lucide-react';

const lifecycleSteps = [
  {
    step: 1,
    title: 'Application',
    description:
      "A borrower submits a loan request detailing their needs and terms.",
    icon: FileText,
  },
  {
    step: 2,
    title: 'Vouching',
    description:
      "Vouchers assess the borrower's reputation and co-sign the loan, staking their own credibility.",
    icon: UserCheck,
  },
  {
    step: 3,
    title: 'Funding',
    description:
      'Lenders browse vouched loans and deploy capital into pools that match their risk appetite.',
    icon: PiggyBank,
  },
  {
    step: 4,
    title: 'Repayment',
    description:
      'The borrower repays the loan. Successful repayment enhances the reputation of both borrower and voucher.',
    icon: BadgeCheck,
  },
];

export function LifecycleSection() {
  return (
    <section id="lifecycle" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            The Loan Lifecycle
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            A simple, transparent, and reputation-driven process from start to
            finish.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {lifecycleSteps.map(step => (
            <Card
              key={step.step}
              className="text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
            >
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-accent">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-4 text-sm font-semibold text-accent">
                  Step {step.step}
                </p>
                <CardTitle className="font-headline">{step.title}</CardTitle>
                <CardDescription className="mt-2">
                  {step.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
