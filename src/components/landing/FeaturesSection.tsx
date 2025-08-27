import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  BadgeDollarSign,
  Shield,
  Users,
  TrendingUp,
  Handshake,
  Award,
  type LucideIcon,
} from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const borrowerFeatures: Feature[] = [
  {
    icon: BadgeDollarSign,
    title: 'Undercollateralized Loans',
    description: 'Access capital without needing to over-collateralize your assets.',
  },
  {
    icon: Shield,
    title: 'Reputation as Capital',
    description: 'Leverage your financial and social history to secure funding.',
  },
  {
    icon: Users,
    title: 'Community Vouching',
    description: 'Get support from your network to validate your creditworthiness.',
  },
];

const lenderFeatures: Feature[] = [
  {
    icon: TrendingUp,
    title: 'Competitive Yields',
    description: 'Earn attractive returns by funding a diversified portfolio of loans.',
  },
  {
    icon: Shield,
    title: 'Mitigated Risk',
    description: 'Vouchers provide a layer of due diligence, reducing default risk.',
  },
  {
    icon: Award,
    title: 'AI-Powered Insights',
    description: 'Use our AI tools for guidance on portfolio diversification and strategy.',
  },
];

const voucherFeatures: Feature[] = [
  {
    icon: Handshake,
    title: 'Monetize Trust',
    description: 'Earn fees by staking your reputation and vouching for borrowers.',
  },
  {
    icon: Award,
    title: 'Build Reputation',
    description: 'Increase your on-chain reputation with every successful loan you vouch for.',
  },
  {
    icon: TrendingUp,
    title: 'Protocol Incentives',
    description: 'Gain rewards from the protocol for your crucial role in the ecosystem.',
  },
];

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(feature => (
        <Card
          key={feature.title}
          className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
        >
          <CardHeader>
            <feature.icon className="h-8 w-8 text-primary" />
            <CardTitle className="mt-4 font-headline text-lg">
              {feature.title}
            </CardTitle>
            <CardDescription className="mt-2">
              {feature.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            A Protocol for Everyone
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            KIN offers distinct advantages for every participant in the
            ecosystem.
          </p>
        </div>

        <Tabs defaultValue="borrowers" className="mt-12 w-full">
          <TabsList className="mx-auto grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="borrowers">For Borrowers</TabsTrigger>
            <TabsTrigger value="lenders">For Lenders</TabsTrigger>
            <TabsTrigger value="vouchers">For Vouchers</TabsTrigger>
          </TabsList>

          <TabsContent value="borrowers">
            <FeatureGrid features={borrowerFeatures} />
          </TabsContent>
          <TabsContent value="lenders">
            <FeatureGrid features={lenderFeatures} />
          </TabsContent>
          <TabsContent value="vouchers">
            <FeatureGrid features={voucherFeatures} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
