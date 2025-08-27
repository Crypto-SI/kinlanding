import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const useCases = [
  {
    title: 'Small Business Funding',
    description:
      'An entrepreneur in a bustling African market secured a loan to expand her craft business, vouched for by her local merchant association.',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'african market',
  },
  {
    title: 'Agricultural Loans',
    description:
      'A farmer in Kenya is funding their farm expansion through a loan co-signed by other members of their farming cooperative.',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'kenyan farmer',
  },
  {
    title: 'Community Projects',
    description:
      'A cooperative in a village in Ghana received funding for a solar-powered irrigation system, enabling them to increase crop yields and local food security.',
    image: 'https://picsum.photos/600/400?random=3',
    hint: 'ghanaian village',
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Real-World Impact
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            See how KIN Protocol empowers individuals and communities across the
            globe.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(useCase => (
            <Card
              key={useCase.title}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
            >
              <CardHeader className="p-0">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={useCase.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline">{useCase.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
